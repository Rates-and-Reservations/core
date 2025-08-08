import rateLimit from 'express-rate-limit';
import { Request } from 'express';

// More aggressive rate limiting for authentication endpoints
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs for auth endpoints
  message: {
    error: 'Too many authentication attempts, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Moderate rate limiting for API endpoints
export const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Lenient rate limiting for public endpoints
export const publicRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 200 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Custom rate limiter based on API key
export const createApiKeyRateLimit = (requestsPerHour: number = 1000) => {
  return rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: requestsPerHour,
    keyGenerator: (req: Request) => {
      // Use API key as the identifier for rate limiting, fallback to IP if not present
      const apiKey = req.headers['x-api-key'];
      if (typeof apiKey === 'string' && apiKey.trim() !== '') {
        return apiKey;
      }
      // Always return a string (req.ip is always a string)
      return req.ip || 'unknown-ip';
    },
    message: {
      error: 'API key rate limit exceeded, please try again later.',
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};
