import { Request, Response, NextFunction } from 'express';

const roles = {
  admin: {
    permissions: ['read', 'write', 'delete']
  },
  user: {
    permissions: ['read']
  }
};

const authorizeMiddleware = (role: string)  => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.body.user.role as keyof typeof roles;
    if (roles[userRole].permissions.includes(role)) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  };
}

export default authorizeMiddleware;
