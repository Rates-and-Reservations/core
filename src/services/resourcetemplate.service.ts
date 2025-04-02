import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type ResourceTemplateCreateInput = Prisma.ResourceTemplateCreateInput;
type ResourceTemplateUpdateInput = Prisma.ResourceTemplateUpdateInput;

export const createResourceTemplate = async (data: ResourceTemplateCreateInput) => {
  return prisma.resourceTemplate.create({ data });
};

export const getResourceTemplateById = async (id: string) => {
  return prisma.resourceTemplate.findUnique({ where: { id } });
};

export const listResourceTemplates = async (filter: any = {}) => {
  return prisma.resourceTemplate.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateResourceTemplate = async (id: string, data: ResourceTemplateUpdateInput) => {
  return prisma.resourceTemplate.update({ where: { id }, data });
};

export const deleteResourceTemplate = async (id: string) => {
  return prisma.resourceTemplate.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteResourceTemplate = async (id: string) => {
//   return prisma.resourceTemplate.delete({ where: { id } });
// };
