import { Request, Response, NextFunction } from 'express';

function contentNegotiationMiddleware(req: Request, res: Response, next: NextFunction) {
  const acceptedTypes = req.accepts(['json', 'xml']);

  if (!acceptedTypes) {
    return res.status(406).send('Not Acceptable');
  }

  if (acceptedTypes === 'json') {
    res.setHeader('Content-Type', 'application/json');
  } else if (acceptedTypes === 'xml') {
    res.setHeader('Content-Type', 'application/xml');
  }

  next();
}

export default contentNegotiationMiddleware;
