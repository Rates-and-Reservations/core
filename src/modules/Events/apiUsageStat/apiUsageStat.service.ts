import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type ApiUsageStatCreateInput = Prisma.ApiUsageStatCreateInput;
type ApiUsageStatUpdateInput = Prisma.ApiUsageStatUpdateInput;

export const createApiUsageStat = async (data: ApiUsageStatCreateInput) => {
  return prisma.apiUsageStat.create({ data });
};

export const getApiUsageStatById = async (id: string) => {
  return prisma.apiUsageStat.findUnique({ where: { id } });
};

export const listApiUsageStats = async (filter: any = {}) => {
  return prisma.apiUsageStat.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateApiUsageStat = async (id: string, data: ApiUsageStatUpdateInput) => {
  return prisma.apiUsageStat.update({ where: { id }, data });
};

export const deleteApiUsageStat = async (id: string) => {
  return prisma.apiUsageStat.update({ where: { id }, data: { deletedAt: new Date() } });
};
