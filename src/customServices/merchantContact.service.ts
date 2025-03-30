// merchantContactService.ts
import prisma from '@/clients/prisma';

export const markAsDefaultContact = async (contactId: string) => {
  const contact = await prisma.merchantContact.findUnique({
    where: { id: contactId },
  });

  if (!contact) {
    throw new Error('Contact not found');
  }

  const merchantId = contact.merchantId;

  await prisma.merchantContact.updateMany({
    where: {
      merchantId,
      NOT: { id: contactId },
    },
    data: { isDefault: false },
  });

  return prisma.merchantContact.update({
    where: { id: contactId },
    data: { isDefault: true },
  });
};
