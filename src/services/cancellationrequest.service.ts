import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type CancellationRequestCreateInput = Prisma.CancellationRequestCreateInput;
type CancellationRequestUpdateInput = Prisma.CancellationRequestUpdateInput;

export const createCancellationRequest = async (data: CancellationRequestCreateInput) => {
  return prisma.cancellationRequest.create({ data });
};

export const getCancellationRequestById = async (id: string) => {
  return prisma.cancellationRequest.findUnique({ where: { id } });
};

export const listCancellationRequests = async (filter: any = {}) => {
  return prisma.cancellationRequest.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateCancellationRequest = async (id: string, data: CancellationRequestUpdateInput) => {
  return prisma.cancellationRequest.update({ where: { id }, data });
};

export const deleteCancellationRequest = async (id: string) => {
  return prisma.cancellationRequest.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteCancellationRequest = async (id: string) => {
//   return prisma.cancellationRequest.delete({ where: { id } });
// };
