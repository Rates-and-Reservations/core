import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type AppScopeCreateInput = Prisma.AppScopeCreateInput;
type AppScopeUpdateInput = Prisma.AppScopeUpdateInput;

export const createAppScope = async (data: AppScopeCreateInput) => {
  return prisma.appScope.create({ data });
};

export const getAppScopeById = async (id: string) => {
  return prisma.appScope.findUnique({ where: { id } });
};

export const listAppScopes = async (filter: any = {}) => {
  return prisma.appScope.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateAppScope = async (id: string, data: AppScopeUpdateInput) => {
  return prisma.appScope.update({ where: { id }, data });
};

export const deleteAppScope = async (id: string) => {
  return prisma.appScope.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteAppScope = async (id: string) => {
//   return prisma.appScope.delete({ where: { id } });
// };
