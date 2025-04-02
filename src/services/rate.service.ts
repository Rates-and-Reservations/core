import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type RateCreateInput = Prisma.RateCreateInput;
type RateUpdateInput = Prisma.RateUpdateInput;

export const createRate = async (data: RateCreateInput) => {
  return prisma.rate.create({ data });
};

export const getRateById = async (id: string) => {
  return prisma.rate.findUnique({ where: { id } });
};

export const listRates = async (filter: any = {}) => {
  return prisma.rate.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateRate = async (id: string, data: RateUpdateInput) => {
  return prisma.rate.update({ where: { id }, data });
};

export const deleteRate = async (id: string) => {
  return prisma.rate.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteRate = async (id: string) => {
//   return prisma.rate.delete({ where: { id } });
// };
