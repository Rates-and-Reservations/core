import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import prisma from '@/clients/prisma';

export const apiKeyAuth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('ApiKey ')) {
    return res.status(401).json({ message: 'Missing API key' });
  }

  const apiKey = authHeader.replace('ApiKey ', '').trim();

  const keys = await prisma.apiKey.findMany({
    where: { revoked: false },
    include: { merchant: true },
  });

  const validKey = await Promise.any(
    keys.map(async (record) => {
      const match = await bcrypt.compare(apiKey, record.keyHash);
      return match ? record : Promise.reject();
    })
  ).catch(() => null);

  if (!validKey) {
    return res.status(401).json({ message: 'Invalid API key' });
  }

  (req as any).merchant = validKey.merchant;

  next();
};
