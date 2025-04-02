import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type AppCreateInput = Prisma.AppCreateInput;
type AppUpdateInput = Prisma.AppUpdateInput;

export const createApp = async (data: AppCreateInput) => {
  return prisma.app.create({ data });
};

export const getAppById = async (id: string) => {
  return prisma.app.findUnique({ where: { id } });
};

export const listApps = async (filter: any = {}) => {
  return prisma.app.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateApp = async (id: string, data: AppUpdateInput) => {
  return prisma.app.update({ where: { id }, data });
};

export const deleteApp = async (id: string) => {
  return prisma.app.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteApp = async (id: string) => {
//   return prisma.app.delete({ where: { id } });
// };
