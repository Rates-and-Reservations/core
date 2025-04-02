import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type ApiKeyCreateInput = Prisma.ApiKeyCreateInput;
type ApiKeyUpdateInput = Prisma.ApiKeyUpdateInput;

export const createApiKey = async (data: ApiKeyCreateInput) => {
  return prisma.apiKey.create({ data });
};

export const getApiKeyById = async (id: string) => {
  return prisma.apiKey.findUnique({ where: { id } });
};

export const listApiKeys = async (filter: any = {}) => {
  return prisma.apiKey.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateApiKey = async (id: string, data: ApiKeyUpdateInput) => {
  return prisma.apiKey.update({ where: { id }, data });
};

export const deleteApiKey = async (id: string) => {
  return prisma.apiKey.update({ where: { id }, data: { deletedAt: new Date() } });
};
