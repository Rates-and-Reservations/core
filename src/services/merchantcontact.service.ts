import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type MerchantContactCreateInput = Prisma.MerchantContactCreateInput;
type MerchantContactUpdateInput = Prisma.MerchantContactUpdateInput;

export const createMerchantContact = async (data: MerchantContactCreateInput) => {
  return prisma.merchantContact.create({ data });
};

export const getMerchantContactById = async (id: string) => {
  return prisma.merchantContact.findUnique({ where: { id } });
};

export const listMerchantContacts = async (filter: any = {}) => {
  return prisma.merchantContact.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateMerchantContact = async (id: string, data: MerchantContactUpdateInput) => {
  return prisma.merchantContact.update({ where: { id }, data });
};

export const deleteMerchantContact = async (id: string) => {
  return prisma.merchantContact.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteMerchantContact = async (id: string) => {
//   return prisma.merchantContact.delete({ where: { id } });
// };
