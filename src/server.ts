import dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger';
import { PrismaClient } from '@prisma/client';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Initialize Prisma Client
const prisma = new PrismaClient({
  log: NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['warn', 'error'],
});

// Graceful shutdown function
const gracefulShutdown = (signal: string) => {
  logger.info(`Received ${signal}. Graceful shutdown initiated.`);
  
  server.close(() => {
    logger.info('HTTP server closed.');
    
    // Close database connections
    prisma.$disconnect()
      .then(() => {
        logger.info('Database connections closed.');
        process.exit(0);
      })
      .catch((error: any) => {
        logger.error('Error during database disconnect:', error);
        process.exit(1);
      });
  });
};

// Database connection check
const checkDatabaseConnection = async () => {
  try {
    await prisma.$connect();
    logger.info('Database connected successfully');
    
    // Run a simple query to verify connection
    await prisma.$queryRaw`SELECT 1`;
    logger.info('Database query test successful');
  } catch (error) {
    logger.error('Database connection failed:', error);
    process.exit(1);
  }
};

// Start server
const startServer = async () => {
  try {
    // Check database connection
    await checkDatabaseConnection();
    
    // Start HTTP server
    const server = app.listen(PORT, () => {
      logger.info(`🚀 RatesSpot API server running on port ${PORT}`);
      logger.info(`📚 API Documentation available at http://localhost:${PORT}/api/docs`);
      logger.info(`🏥 Health check available at http://localhost:${PORT}/health`);
      logger.info(`🌍 Environment: ${NODE_ENV}`);
    });

    // Handle graceful shutdown
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
    
    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      logger.error('Uncaught Exception:', error);
      gracefulShutdown('uncaughtException');
    });
    
    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
      logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
      gracefulShutdown('unhandledRejection');
    });

    return server;
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Export server instance for testing
let server: any;

if (require.main === module) {
  // Only start server if this file is run directly
  startServer().then((serverInstance) => {
    server = serverInstance;
  });
}

export { app, prisma, startServer };
export default server;
