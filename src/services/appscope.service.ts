import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type AppScopeCreateInput = Prisma.AppScopeCreateInput;
type AppScopeUpdateInput = Prisma.AppScopeUpdateInput;

// Create AppScope
export const createAppScope = async (data: AppScopeCreateInput) => {
  return prisma.appScope.create({
    data,
  });
};

// Get AppScope by ID
export const getAppScopeById = async (id: string) => {
  return prisma.appScope.findUnique({
    where: { id },
  });
};

// List AppScopes
export const listAppScopes = async (filter: any = {}) => {
  return prisma.appScope.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update AppScope
export const updateAppScope = async (id: string, data: AppScopeUpdateInput) => {
  return prisma.appScope.update({
    where: { id },
    data,
  });
};

// Delete AppScope
export const deleteAppScope = async (id: string) => {
  return prisma.appScope.delete({
    where: { id },
  });
};
