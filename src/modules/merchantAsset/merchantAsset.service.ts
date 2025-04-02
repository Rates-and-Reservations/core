import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type MerchantAssetCreateInput = Prisma.MerchantAssetCreateInput;
type MerchantAssetUpdateInput = Prisma.MerchantAssetUpdateInput;

export const createMerchantAsset = async (data: MerchantAssetCreateInput) => {
  return prisma.merchantAsset.create({ data });
};

export const getMerchantAssetById = async (id: string) => {
  return prisma.merchantAsset.findUnique({ where: { id } });
};

export const listMerchantAssets = async (filter: any = {}) => {
  return prisma.merchantAsset.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateMerchantAsset = async (id: string, data: MerchantAssetUpdateInput) => {
  return prisma.merchantAsset.update({ where: { id }, data });
};

export const deleteMerchantAsset = async (id: string) => {
  return prisma.merchantAsset.update({ where: { id }, data: { deletedAt: new Date() } });
};
