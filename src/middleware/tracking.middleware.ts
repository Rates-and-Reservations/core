import { Request, Response, NextFunction } from 'express';
import { performance } from 'perf_hooks';

const trackingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = performance.now();

  res.on('finish', () => {
    const duration = performance.now() - start;
    const { method, originalUrl, statusCode } = req;
    const { contentLength } = res.getHeaders();
    const message = `${method} ${originalUrl} ${statusCode} ${contentLength} - ${duration}ms`;

    console.info(message);
  });

  next();
};

export default trackingMiddleware;
