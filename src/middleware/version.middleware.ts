import { Request, Response, NextFunction } from 'express';

const SUPPORTED_VERSIONS = ['v1', 'v2'];

export function versionMiddleware(req: Request, res: Response, next: NextFunction) {
  const version = req.headers['x-api-version'] as string;

  if (!version) {
    return res.status(400).json({ error: 'API version header is missing' });
  }

  if (!SUPPORTED_VERSIONS.includes(version)) {
    return res.status(400).json({ error: `API version ${version} is not supported` });
  }

  // Set the version in the request object for downstream middleware to use
  req.body.version = version;

  next();
}
