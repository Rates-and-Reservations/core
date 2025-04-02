import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type MerchantUserCreateInput = Prisma.MerchantUserCreateInput;
type MerchantUserUpdateInput = Prisma.MerchantUserUpdateInput;

export const createMerchantUser = async (data: MerchantUserCreateInput) => {
  return prisma.merchantUser.create({ data });
};

export const getMerchantUserById = async (id: string) => {
  return prisma.merchantUser.findUnique({ where: { id } });
};

export const listMerchantUsers = async (filter: any = {}) => {
  return prisma.merchantUser.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateMerchantUser = async (id: string, data: MerchantUserUpdateInput) => {
  return prisma.merchantUser.update({ where: { id }, data });
};

export const deleteMerchantUser = async (id: string) => {
  return prisma.merchantUser.update({ where: { id }, data: { deletedAt: new Date() } });
};
