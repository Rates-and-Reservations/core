import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type ApiKeyCreateInput = Prisma.ApiKeyCreateInput;
type ApiKeyUpdateInput = Prisma.ApiKeyUpdateInput;

// Create ApiKey
export const createApiKey = async (data: ApiKeyCreateInput) => {
  return prisma.apiKey.create({
    data,
  });
};

// Get ApiKey by ID
export const getApiKeyById = async (id: string) => {
  return prisma.apiKey.findUnique({
    where: { id },
  });
};

// List ApiKeys
export const listApiKeys = async (filter: any = {}) => {
  return prisma.apiKey.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update ApiKey
export const updateApiKey = async (id: string, data: ApiKeyUpdateInput) => {
  return prisma.apiKey.update({
    where: { id },
    data,
  });
};

// Delete ApiKey
export const deleteApiKey = async (id: string) => {
  return prisma.apiKey.delete({
    where: { id },
  });
};
