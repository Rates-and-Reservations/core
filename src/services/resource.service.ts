import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type ResourceCreateInput = Prisma.ResourceCreateInput;
type ResourceUpdateInput = Prisma.ResourceUpdateInput;

export const createResource = async (data: ResourceCreateInput) => {
  return prisma.resource.create({ data });
};

export const getResourceById = async (id: string) => {
  return prisma.resource.findUnique({ where: { id } });
};

export const listResources = async (filter: any = {}) => {
  return prisma.resource.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateResource = async (id: string, data: ResourceUpdateInput) => {
  return prisma.resource.update({ where: { id }, data });
};

export const deleteResource = async (id: string) => {
  return prisma.resource.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteResource = async (id: string) => {
//   return prisma.resource.delete({ where: { id } });
// };
