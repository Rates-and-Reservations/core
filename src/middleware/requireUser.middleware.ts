import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from 'express';

import { requireAuth } from '@clerk/express';

export const requireUser: RequestHandler[] = [
  requireAuth(),
  (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.auth || {};

    if (!userId) {
      res.status(401).json({ message: 'Unauthorized: User not found' });
      return;
    }

    next();
  }
];
