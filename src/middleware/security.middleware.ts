import { Request, Response, NextFunction } from 'express';

export function securityMiddleware(req: Request, res: Response, next: NextFunction) {
  // Set Content Security Policy (CSP) header
  res.setHeader('Content-Security-Policy', "default-src 'self'");

  // Set HTTP Strict Transport Security (HSTS) header
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  // Call the next middleware
  next();
}
