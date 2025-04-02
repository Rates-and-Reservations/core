import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type UiTemplateCreateInput = Prisma.UiTemplateCreateInput;
type UiTemplateUpdateInput = Prisma.UiTemplateUpdateInput;

export const createUiTemplate = async (data: UiTemplateCreateInput) => {
  return prisma.uiTemplate.create({ data });
};

export const getUiTemplateById = async (id: string) => {
  return prisma.uiTemplate.findUnique({ where: { id } });
};

export const listUiTemplates = async (filter: any = {}) => {
  return prisma.uiTemplate.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateUiTemplate = async (id: string, data: UiTemplateUpdateInput) => {
  return prisma.uiTemplate.update({ where: { id }, data });
};

export const deleteUiTemplate = async (id: string) => {
  return prisma.uiTemplate.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteUiTemplate = async (id: string) => {
//   return prisma.uiTemplate.delete({ where: { id } });
// };
