import { Request, Response, NextFunction } from 'express';

export const requestParserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        req.body = JSON.parse(body);
        next();
      } catch (error) {
        res.status(400).send('Invalid JSON');
      }
    });
  } else {
    next();
  }
};
