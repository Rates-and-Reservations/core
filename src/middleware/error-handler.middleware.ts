// middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { ApiError, CustomError } from '@/errors';

function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  if (err instanceof CustomError) {
    console.error(`[CustomError]: ${err.message}`);
    res.status(err.statusCode).json({
      error: err.message,
      ...(typeof err.details === 'object' && err.details !== null ? { details: err.details } : {}),
    });
  }
  else if (err instanceof ApiError) {
    console.warn(`[ApiError]: ${err.message}`);
    res.status(err.statusCode).json({
      error: err.message,
      ...(typeof err.details === 'object' && err.details !== null ? { details: err.details } : {}),
    });
  } else if (err instanceof Error) {
    console.error(`[Unhandled Error]: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    console.error('[Unknown Error]:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

export default errorHandler;
