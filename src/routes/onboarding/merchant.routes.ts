import { Router, Request, Response } from 'express';
import prisma from '@/clients/prisma';
import { requireUser } from '@/middleware/requireUser';

const router = Router();

router.get('/', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;

  const merchants = await prisma.merchant.findMany({
    where: { ownerId: userId! },
  });

  res.json(merchants);
});

// Create a merchant
router.post('/', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const merchant = await prisma.merchant.create({
    data: {
      ...req.body,
      ownerId: userId,
      MerchantUser: {
        create: {
          userId,
          role: 'OWNER',
        },
      },
    },
  });

  res.status(201).json(merchant);
});

// Get a single merchant
router.get('/:id', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const { id } = req.params;

  const merchant = await prisma.merchant.findUnique({
    where: { id },
    include: { MerchantUser: true },
  });

  if (!merchant) { res.status(404).json({ message: 'Not found' }); return; };

  const isOwner = merchant.ownerId === userId;
  if (!isOwner) { res.status(403).json({ message: 'Forbidden' }); return; };

  res.json(merchant);
});

// Update merchant (only owner)
router.put('/:id', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const { id } = req.params;
  const data = req.body;

  const merchant = await prisma.merchant.findUnique({ where: { id } });

  if (!merchant || merchant.ownerId !== userId) {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }
  const updated = await prisma.merchant.update({
    where: { id },
    data,
  });

  res.json(updated);
});


// Delete merchant (only owner)
router.delete('/:id', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const { id } = req.params;

  const merchant = await prisma.merchant.findUnique({ where: { id } });

  if (!merchant || merchant.ownerId !== userId) {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }
  await prisma.merchant.delete({ where: { id } });

  res.json({ message: 'Merchant deleted' });
});

export default router;
