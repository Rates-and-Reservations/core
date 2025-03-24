import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type ApiUsageStatCreateInput = Prisma.ApiUsageStatCreateInput;
type ApiUsageStatUpdateInput = Prisma.ApiUsageStatUpdateInput;

// Create ApiUsageStat
export const createApiUsageStat = async (data: ApiUsageStatCreateInput) => {
  return prisma.apiUsageStat.create({
    data,
  });
};

// Get ApiUsageStat by ID
export const getApiUsageStatById = async (id: string) => {
  return prisma.apiUsageStat.findUnique({
    where: { id },
  });
};

// List ApiUsageStats
export const listApiUsageStats = async (filter: any = {}) => {
  return prisma.apiUsageStat.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update ApiUsageStat
export const updateApiUsageStat = async (id: string, data: ApiUsageStatUpdateInput) => {
  return prisma.apiUsageStat.update({
    where: { id },
    data,
  });
};

// Delete ApiUsageStat
export const deleteApiUsageStat = async (id: string) => {
  return prisma.apiUsageStat.delete({
    where: { id },
  });
};
