import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type ApiUsageLogCreateInput = Prisma.ApiUsageLogCreateInput;
type ApiUsageLogUpdateInput = Prisma.ApiUsageLogUpdateInput;

export const createApiUsageLog = async (data: ApiUsageLogCreateInput) => {
  return prisma.apiUsageLog.create({ data });
};

export const getApiUsageLogById = async (id: string) => {
  return prisma.apiUsageLog.findUnique({ where: { id } });
};

export const listApiUsageLogs = async (filter: any = {}) => {
  return prisma.apiUsageLog.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateApiUsageLog = async (id: string, data: ApiUsageLogUpdateInput) => {
  return prisma.apiUsageLog.update({ where: { id }, data });
};

export const deleteApiUsageLog = async (id: string) => {
  return prisma.apiUsageLog.update({ where: { id }, data: { deletedAt: new Date() } });
};
