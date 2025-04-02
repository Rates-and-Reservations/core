import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type WaitlistEntryCreateInput = Prisma.WaitlistEntryCreateInput;
type WaitlistEntryUpdateInput = Prisma.WaitlistEntryUpdateInput;

export const createWaitlistEntry = async (data: WaitlistEntryCreateInput) => {
  return prisma.waitlistEntry.create({ data });
};

export const getWaitlistEntryById = async (id: string) => {
  return prisma.waitlistEntry.findUnique({ where: { id } });
};

export const listWaitlistEntrys = async (filter: any = {}) => {
  return prisma.waitlistEntry.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateWaitlistEntry = async (id: string, data: WaitlistEntryUpdateInput) => {
  return prisma.waitlistEntry.update({ where: { id }, data });
};

export const deleteWaitlistEntry = async (id: string) => {
  return prisma.waitlistEntry.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteWaitlistEntry = async (id: string) => {
//   return prisma.waitlistEntry.delete({ where: { id } });
// };
