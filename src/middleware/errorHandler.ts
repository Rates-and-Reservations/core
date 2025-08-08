import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import logger from '@/utils/logger';
import { errorResponse } from '@/utils/responses';

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error('Error caught by error handler:', {
    error: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
  });

  // Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        return errorResponse(res, 'A record with this data already exists', 409);
      case 'P2025':
        return errorResponse(res, 'Record not found', 404);
      case 'P2003':
        return errorResponse(res, 'Foreign key constraint failed', 400);
      case 'P2021':
        return errorResponse(res, 'Table does not exist', 500);
      default:
        return errorResponse(res, 'Database error occurred', 500);
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return errorResponse(res, 'Invalid data provided', 400);
  }

  // JWT errors
  if (error.name === 'JsonWebTokenError') {
    return errorResponse(res, 'Invalid token', 401);
  }

  if (error.name === 'TokenExpiredError') {
    return errorResponse(res, 'Token expired', 401);
  }

  // Multer errors (file upload)
  if (error.code === 'LIMIT_FILE_SIZE') {
    return errorResponse(res, 'File too large', 413);
  }

  if (error.code === 'LIMIT_UNEXPECTED_FILE') {
    return errorResponse(res, 'Unexpected file field', 400);
  }

  // Default error response
  const statusCode = error.statusCode || error.status || 500;
  const message = error.message || 'Internal server error';

  return errorResponse(res, message, statusCode);
};
