import rateLimit from 'express-rate-limit';

// Example: 100 requests per 15 minutes
export const publicApiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100,
  keyGenerator: (req) => {
    const apiKey = req.headers.authorization?.replace('ApiKey ', '').trim();
    return apiKey || req.ip || 'default-key';
  },
  handler: (req, res) => {
    res.status(429).json({ message: 'Too many requests. Please try again later.' });
  },
});
