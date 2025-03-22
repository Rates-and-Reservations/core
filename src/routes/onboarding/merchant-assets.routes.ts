import { Router, Request, Response } from 'express';
import prisma from '@/clients/prisma';
import { requireUser } from '@/middleware/requireUser';

const router = Router();

router.get('/:merchantId/assets', requireUser, async (req: Request, res: Response) => {
  const { merchantId } = req.params;
  const { userId } = req.auth;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user) { res.status(403).json({ message: 'Forbidden' }); return; }

  const assets = await prisma.merchantAsset.findMany({
    where: { merchantId },
  });

  res.json(assets);
});

router.post('/:merchantId/assets', requireUser, async (req: Request, res: Response) => {
  const { merchantId } = req.params;
  const { userId } = req.auth;
  const { name, type, url } = req.body;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user) { res.status(403).json({ message: 'Forbidden' }); return; }

  const asset = await prisma.merchantAsset.create({
    data: {
      merchantId,
      name,
      type,
      url,
    },
  });

  res.status(201).json(asset);
});

router.put('/:merchantId/assets/:assetId', requireUser, async (req: Request, res: Response) => {
  const { merchantId, assetId } = req.params;
  const { userId } = req.auth;
  const { name, type, url } = req.body;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user) { res.status(403).json({ message: 'Forbidden' }); return; }

  const updated = await prisma.merchantAsset.update({
    where: { id: assetId },
    data: { name, type, url },
  });

  res.json(updated);
});

router.delete('/:merchantId/assets/:assetId', requireUser, async (req: Request, res: Response) => {
  const { merchantId, assetId } = req.params;
  const { userId } = req.auth;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user) { res.status(403).json({ message: 'Forbidden' }); return; }

  await prisma.merchantAsset.delete({
    where: { id: assetId },
  });

  res.json({ message: 'Asset deleted' });
});

export default router;
