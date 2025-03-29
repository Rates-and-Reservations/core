import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

// Limit requests to 100 per hour per IP address
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100,
  message: 'Too many requests from this IP, please try again later',
  keyGenerator: (req) => {
    const apiKey = req.headers.authorization?.replace('ApiKey ', '').trim();
    return apiKey || req.ip || 'default-key';
  },
  handler: (req, res) => {
    res.status(429).json({ message: 'Too many requests. Please try again later.' });
  },
});

const rateLimitingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  limiter(req, res, next);
};

export default rateLimitingMiddleware;
