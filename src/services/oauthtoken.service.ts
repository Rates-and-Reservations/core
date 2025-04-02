import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type OAuthTokenCreateInput = Prisma.OAuthTokenCreateInput;
type OAuthTokenUpdateInput = Prisma.OAuthTokenUpdateInput;

export const createOAuthToken = async (data: OAuthTokenCreateInput) => {
  return prisma.oAuthToken.create({ data });
};

export const getOAuthTokenById = async (id: string) => {
  return prisma.oAuthToken.findUnique({ where: { id } });
};

export const listOAuthTokens = async (filter: any = {}) => {
  return prisma.oAuthToken.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateOAuthToken = async (id: string, data: OAuthTokenUpdateInput) => {
  return prisma.oAuthToken.update({ where: { id }, data });
};

export const deleteOAuthToken = async (id: string) => {
  return prisma.oAuthToken.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteOAuthToken = async (id: string) => {
//   return prisma.oAuthToken.delete({ where: { id } });
// };
