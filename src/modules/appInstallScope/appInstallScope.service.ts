import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type AppInstallScopeCreateInput = Prisma.AppInstallScopeCreateInput;
type AppInstallScopeUpdateInput = Prisma.AppInstallScopeUpdateInput;

export const createAppInstallScope = async (data: AppInstallScopeCreateInput) => {
  return prisma.appInstallScope.create({ data });
};

export const getAppInstallScopeById = async (id: string) => {
  return prisma.appInstallScope.findUnique({ where: { id } });
};

export const listAppInstallScopes = async (filter: any = {}) => {
  return prisma.appInstallScope.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateAppInstallScope = async (id: string, data: AppInstallScopeUpdateInput) => {
  return prisma.appInstallScope.update({ where: { id }, data });
};

export const deleteAppInstallScope = async (id: string) => {
  return prisma.appInstallScope.update({ where: { id }, data: { deletedAt: new Date() } });
};
