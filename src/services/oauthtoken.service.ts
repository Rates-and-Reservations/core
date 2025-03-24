import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type OAuthTokenCreateInput = Prisma.OAuthTokenCreateInput;
type OAuthTokenUpdateInput = Prisma.OAuthTokenUpdateInput;

// Create OAuthToken
export const createOAuthToken = async (data: OAuthTokenCreateInput) => {
  return prisma.oAuthToken.create({
    data,
  });
};

// Get OAuthToken by ID
export const getOAuthTokenById = async (id: string) => {
  return prisma.oAuthToken.findUnique({
    where: { id },
  });
};

// List OAuthTokens
export const listOAuthTokens = async (filter: any = {}) => {
  return prisma.oAuthToken.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update OAuthToken
export const updateOAuthToken = async (id: string, data: OAuthTokenUpdateInput) => {
  return prisma.oAuthToken.update({
    where: { id },
    data,
  });
};

// Delete OAuthToken
export const deleteOAuthToken = async (id: string) => {
  return prisma.oAuthToken.delete({
    where: { id },
  });
};
