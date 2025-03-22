import { Router, Request, Response } from 'express';
import prisma from '@/clients/prisma';
import { requireUser } from '@/middleware/requireUser';

const router = Router();


router.get('/:merchantId/users', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const { merchantId } = req.params;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user) { 
    res.status(403).json({ message: 'Forbidden' }); 
    return; 
  }

  const users = await prisma.merchantUser.findMany({
    where: { merchantId },
  });

  res.json(users);
});

router.post('/:merchantId/users', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const { merchantId } = req.params;
  const { inviteUserId, role } = req.body;

  const actingUser = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!actingUser || actingUser.role !== 'OWNER') {
    res.status(403).json({ message: 'Only owners can add users' });
    return;
  }

  const newUser = await prisma.merchantUser.create({
    data: {
      merchantId,
      userId: inviteUserId,
      role,
    },
  });

  res.status(201).json(newUser);
});


router.put('/:merchantId/users/:userId', requireUser, async (req: Request, res: Response) => {
  const { userId: currentUserId } = req.auth;
  const { merchantId, userId } = req.params;
  const { role } = req.body;

  const actingUser = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: currentUserId! },
  });

  if (!actingUser || actingUser.role !== 'OWNER') {
    res.status(403).json({ message: 'Only owners can update roles' });
    return;
  }

  const updated = await prisma.merchantUser.update({
    where: { id: userId },
    data: { role },
  });

  res.json(updated);
});

router.delete('/:merchantId/users/:userId', requireUser, async (req: Request, res: Response) => {
  const { userId: currentUserId } = req.auth;
  const { merchantId, userId } = req.params;

  const actingUser = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: currentUserId! },
  });

  if (!actingUser || actingUser.role !== 'OWNER') {
    res.status(403).json({ message: 'Only owners can remove users' });
    return;
  }

  await prisma.merchantUser.delete({
    where: { id: userId },
  });

  res.json({ message: 'User removed' });
});

export default router;
