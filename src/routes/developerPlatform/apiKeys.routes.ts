import e, { Router, Request, Response } from 'express';
import prisma from '@/clients/prisma';
import { requireUser } from '@/middleware/requireUser.middleware';
import { generateApiKey } from '@/utils/apiKey';

const router = Router();

router.post('/:merchantId/api-keys', requireUser, async (req: Request, res: Response) => {
  const { merchantId } = req.params;
  const { userId } = req.auth;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user || user.role !== 'DEVELOPER') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  const { apiKey, keyHash } = await generateApiKey();

  await prisma.apiKey.create({
    data: {
      merchantId,
      keyHash,
    },
  });

  res.status(201).json({ apiKey });
});

router.post('/:merchantId/api-keys/:apiKeyId/revoke', requireUser, async (req: Request, res: Response) => {
  const { merchantId, apiKeyId } = req.params;
  const { userId } = req.auth;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user || user.role !== 'OWNER') {
    res.status(403).json({ message: 'Only owners can revoke API keys' });
    return;
  }

  await prisma.apiKey.update({
    where: { id: apiKeyId },
    data: { revoked: true },
  });

  res.json({ message: 'API key revoked' });
});

router.post('/:merchantId/api-keys/:apiKeyId/rotate', requireUser, async (req: Request, res: Response) => {
  const { merchantId, apiKeyId } = req.params;
  const { userId } = req.auth;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user || user.role !== 'OWNER') {
    res.status(403).json({ message: 'Only owners can rotate API keys' });
    return;
  }

  // Revoke old key
  await prisma.apiKey.update({
    where: { id: apiKeyId },
    data: { revoked: true },
  });

  // Generate new key
  const { apiKey, keyHash } = await generateApiKey();

  await prisma.apiKey.create({
    data: {
      merchantId,
      keyHash,
    },
  });

  res.status(201).json({ apiKey });
});



export default router;