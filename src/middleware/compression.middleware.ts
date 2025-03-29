import { Request, Response, NextFunction } from 'express';
import zlib from 'zlib';

const compressionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const acceptEncoding = req.headers['accept-encoding'];
  if (!acceptEncoding || !acceptEncoding.includes('gzip')) {
    return next();
  }

  res.setHeader('Content-Encoding', 'gzip');
  const gzip = zlib.createGzip();
  gzip.pipe(res);

  return gzip;
}

export default compressionMiddleware;
