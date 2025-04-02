import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type CancellationPolicyCreateInput = Prisma.CancellationPolicyCreateInput;
type CancellationPolicyUpdateInput = Prisma.CancellationPolicyUpdateInput;

export const createCancellationPolicy = async (data: CancellationPolicyCreateInput) => {
  return prisma.cancellationPolicy.create({ data });
};

export const getCancellationPolicyById = async (id: string) => {
  return prisma.cancellationPolicy.findUnique({ where: { id } });
};

export const listCancellationPolicys = async (filter: any = {}) => {
  return prisma.cancellationPolicy.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateCancellationPolicy = async (id: string, data: CancellationPolicyUpdateInput) => {
  return prisma.cancellationPolicy.update({ where: { id }, data });
};

export const deleteCancellationPolicy = async (id: string) => {
  return prisma.cancellationPolicy.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteCancellationPolicy = async (id: string) => {
//   return prisma.cancellationPolicy.delete({ where: { id } });
// };
