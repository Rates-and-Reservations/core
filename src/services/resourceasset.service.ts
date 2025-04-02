import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type ResourceAssetCreateInput = Prisma.ResourceAssetCreateInput;
type ResourceAssetUpdateInput = Prisma.ResourceAssetUpdateInput;

export const createResourceAsset = async (data: ResourceAssetCreateInput) => {
  return prisma.resourceAsset.create({ data });
};

export const getResourceAssetById = async (id: string) => {
  return prisma.resourceAsset.findUnique({ where: { id } });
};

export const listResourceAssets = async (filter: any = {}) => {
  return prisma.resourceAsset.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateResourceAsset = async (id: string, data: ResourceAssetUpdateInput) => {
  return prisma.resourceAsset.update({ where: { id }, data });
};

export const deleteResourceAsset = async (id: string) => {
  return prisma.resourceAsset.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteResourceAsset = async (id: string) => {
//   return prisma.resourceAsset.delete({ where: { id } });
// };
