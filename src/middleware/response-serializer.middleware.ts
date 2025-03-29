import { Request, Response, NextFunction } from 'express';

function responseSerializerMiddleware(req: Request, res: Response, next: NextFunction) {
  // Wait for the response to be sent
  res.on('finish', () => {
    // Check if the response data is already in JSON format
    if (typeof res.locals.data === 'object') {
      // Format the response data as JSON
      res.json(res.locals.data);
    }
  });

  // Call the next middleware
  next();
}

export default responseSerializerMiddleware;
