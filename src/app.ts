/**
 * Express + TypeScript Starter
 */
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'

import routes from '@/modules/routes';
import errorHandler from '@/middleware/error-handler.middleware';

// Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(clerkMiddleware())

// Routes
app.use('/api', routes);
app.use('api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    message: 'API is running',
    timestamp: new Date(),
  });
});

app.use(errorHandler);

export default app;
