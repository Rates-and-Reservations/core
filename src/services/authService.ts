import bcrypt from 'bcryptjs';
import { nanoid } from 'nanoid';
import prisma from '@/config/database';
import { CreateApiKeyData, UpdateApiKeyData } from '@/types/auth';

export const getCurrentUserDetails = async (userId: string) => {
  const merchantUser = await prisma.merchantUser.findFirst({
    where: {
      userId,
      isActive: true,
      isDeleted: false,
    },
    include: {
      merchant: {
        select: {
          id: true,
          name: true,
          tradingName: true,
          industry: true,
          country: true,
          timezone: true,
          currency: true,
          logo: true,
        },
      },
    },
  });

  return {
    userId,
    role: merchantUser?.role,
    merchant: merchantUser?.merchant,
  };
};

export const logUserActivity = async (
  userId: string,
  action: string,
  ipAddress?: string
) => {
  // This could be expanded to log to a dedicated audit table
  // For now, we'll use a simple log
  return {
    userId,
    action,
    timestamp: new Date(),
    ipAddress,
  };
};

export const createApiKey = async (
  merchantId: string,
  data: CreateApiKeyData,
  createdBy: string
) => {
  // Generate a random API key
  const rawKey = `rk_${nanoid(32)}`;
  
  // Hash the key for storage
  const keyHash = await bcrypt.hash(rawKey, 12);

  const apiKey = await prisma.apiKey.create({
    data: {
      merchantId,
      keyHash,
      label: data.label,
      description: data.description,
      scopes: data.scopes || [],
    },
    select: {
      id: true,
      label: true,
      description: true,
      scopes: true,
      isActive: true,
      createdAt: true,
      lastUsedAt: true,
    },
  });

  // Return the API key with the raw key (only time it's shown)
  return {
    ...apiKey,
    key: rawKey, // This is the only time the raw key is returned
  };
};

export const getApiKeys = async (merchantId: string) => {
  return prisma.apiKey.findMany({
    where: {
      merchantId,
      isDeleted: false,
    },
    select: {
      id: true,
      label: true,
      description: true,
      scopes: true,
      isActive: true,
      createdAt: true,
      lastUsedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const updateApiKey = async (
  apiKeyId: string,
  merchantId: string,
  data: UpdateApiKeyData
) => {
  return prisma.apiKey.update({
    where: {
      id: apiKeyId,
      merchantId,
    },
    data: {
      label: data.label,
      description: data.description,
      scopes: data.scopes,
      isActive: data.isActive,
    },
    select: {
      id: true,
      label: true,
      description: true,
      scopes: true,
      isActive: true,
      createdAt: true,
      lastUsedAt: true,
    },
  });
};

export const deleteApiKey = async (apiKeyId: string, merchantId: string) => {
  return prisma.apiKey.update({
    where: {
      id: apiKeyId,
      merchantId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};
