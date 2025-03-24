import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type ApiUsageLogCreateInput = Prisma.ApiUsageLogCreateInput;
type ApiUsageLogUpdateInput = Prisma.ApiUsageLogUpdateInput;

// Create ApiUsageLog
export const createApiUsageLog = async (data: ApiUsageLogCreateInput) => {
  return prisma.apiUsageLog.create({
    data,
  });
};

// Get ApiUsageLog by ID
export const getApiUsageLogById = async (id: string) => {
  return prisma.apiUsageLog.findUnique({
    where: { id },
  });
};

// List ApiUsageLogs
export const listApiUsageLogs = async (filter: any = {}) => {
  return prisma.apiUsageLog.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update ApiUsageLog
export const updateApiUsageLog = async (id: string, data: ApiUsageLogUpdateInput) => {
  return prisma.apiUsageLog.update({
    where: { id },
    data,
  });
};

// Delete ApiUsageLog
export const deleteApiUsageLog = async (id: string) => {
  return prisma.apiUsageLog.delete({
    where: { id },
  });
};
