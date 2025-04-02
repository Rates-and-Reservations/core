import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type MerchantCreateInput = Prisma.MerchantCreateInput;
type MerchantUpdateInput = Prisma.MerchantUpdateInput;

export const createMerchant = async (data: MerchantCreateInput) => {
  return prisma.merchant.create({ data });
};

export const getMerchantById = async (id: string) => {
  return prisma.merchant.findUnique({ where: { id } });
};

export const listMerchants = async (filter: any = {}) => {
  return prisma.merchant.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateMerchant = async (id: string, data: MerchantUpdateInput) => {
  return prisma.merchant.update({ where: { id }, data });
};

export const deleteMerchant = async (id: string) => {
  return prisma.merchant.update({ where: { id }, data: { deletedAt: new Date() } });
};
