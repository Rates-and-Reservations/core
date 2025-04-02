import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type AppInstallCreateInput = Prisma.AppInstallCreateInput;
type AppInstallUpdateInput = Prisma.AppInstallUpdateInput;

export const createAppInstall = async (data: AppInstallCreateInput) => {
  return prisma.appInstall.create({ data });
};

export const getAppInstallById = async (id: string) => {
  return prisma.appInstall.findUnique({ where: { id } });
};

export const listAppInstalls = async (filter: any = {}) => {
  return prisma.appInstall.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateAppInstall = async (id: string, data: AppInstallUpdateInput) => {
  return prisma.appInstall.update({ where: { id }, data });
};

export const deleteAppInstall = async (id: string) => {
  return prisma.appInstall.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteAppInstall = async (id: string) => {
//   return prisma.appInstall.delete({ where: { id } });
// };
