import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type AppInstallCreateInput = Prisma.AppInstallCreateInput;
type AppInstallUpdateInput = Prisma.AppInstallUpdateInput;

// Create AppInstall
export const createAppInstall = async (data: AppInstallCreateInput) => {
  return prisma.appInstall.create({
    data,
  });
};

// Get AppInstall by ID
export const getAppInstallById = async (id: string) => {
  return prisma.appInstall.findUnique({
    where: { id },
  });
};

// List AppInstalls
export const listAppInstalls = async (filter: any = {}) => {
  return prisma.appInstall.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update AppInstall
export const updateAppInstall = async (id: string, data: AppInstallUpdateInput) => {
  return prisma.appInstall.update({
    where: { id },
    data,
  });
};

// Delete AppInstall
export const deleteAppInstall = async (id: string) => {
  return prisma.appInstall.delete({
    where: { id },
  });
};
