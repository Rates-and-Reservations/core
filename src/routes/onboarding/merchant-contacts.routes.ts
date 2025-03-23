import { Router, Request, Response } from 'express';
import prisma from '@/clients/prisma';
import { requireUser } from '@/middleware/requireUser.middleware';

const router = Router();

router.get('/:merchantId/contacts', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const { merchantId } = req.params;

  const isAuthorized = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!isAuthorized) {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  const contacts = await prisma.merchantContact.findMany({
    where: { merchantId },
  });

  res.json(contacts);
});

router.post('/:merchantId/contacts', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const { merchantId } = req.params;
  const { email, phone, address, city, postcode } = req.body;

  const isAuthorized = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!isAuthorized) {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  const contact = await prisma.merchantContact.create({
    data: {
      merchantId,
      email,
      phone,
      address,
      city,
      postcode,
    },
  });

  res.status(201).json(contact);
});

router.put('/:merchantId/contacts/:contactId', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const { merchantId, contactId } = req.params;
  const data = req.body;

  const isAuthorized = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!isAuthorized) {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  const updated = await prisma.merchantContact.update({
    where: { id: contactId },
    data,
  });

  res.json(updated);
});

router.delete('/:merchantId/contacts/:contactId', requireUser, async (req: Request, res: Response) => {
  const { userId } = req.auth;
  const { merchantId, contactId } = req.params;

  const isAuthorized = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!isAuthorized) {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  await prisma.merchantContact.delete({
    where: { id: contactId },
  });

  res.json({ message: 'Contact deleted' });
});

export default router;
