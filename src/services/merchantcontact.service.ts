import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type MerchantContactCreateInput = Prisma.MerchantContactCreateInput;
type MerchantContactUpdateInput = Prisma.MerchantContactUpdateInput;

// Create MerchantContact
export const createMerchantContact = async (data: MerchantContactCreateInput) => {
  return prisma.merchantContact.create({
    data,
  });
};

// Get MerchantContact by ID
export const getMerchantContactById = async (id: string) => {
  return prisma.merchantContact.findUnique({
    where: { id },
  });
};

// List MerchantContacts
export const listMerchantContacts = async (filter: any = {}) => {
  return prisma.merchantContact.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update MerchantContact
export const updateMerchantContact = async (id: string, data: MerchantContactUpdateInput) => {
  return prisma.merchantContact.update({
    where: { id },
    data,
  });
};

// Delete MerchantContact
export const deleteMerchantContact = async (id: string) => {
  return prisma.merchantContact.delete({
    where: { id },
  });
};
