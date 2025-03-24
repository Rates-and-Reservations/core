import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type MerchantAssetCreateInput = Prisma.MerchantAssetCreateInput;
type MerchantAssetUpdateInput = Prisma.MerchantAssetUpdateInput;

// Create MerchantAsset
export const createMerchantAsset = async (data: MerchantAssetCreateInput) => {
  return prisma.merchantAsset.create({
    data,
  });
};

// Get MerchantAsset by ID
export const getMerchantAssetById = async (id: string) => {
  return prisma.merchantAsset.findUnique({
    where: { id },
  });
};

// List MerchantAssets
export const listMerchantAssets = async (filter: any = {}) => {
  return prisma.merchantAsset.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update MerchantAsset
export const updateMerchantAsset = async (id: string, data: MerchantAssetUpdateInput) => {
  return prisma.merchantAsset.update({
    where: { id },
    data,
  });
};

// Delete MerchantAsset
export const deleteMerchantAsset = async (id: string) => {
  return prisma.merchantAsset.delete({
    where: { id },
  });
};
