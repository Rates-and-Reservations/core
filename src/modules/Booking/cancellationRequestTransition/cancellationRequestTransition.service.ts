import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type CancellationRequestTransitionCreateInput = Prisma.CancellationRequestTransitionCreateInput;
type CancellationRequestTransitionUpdateInput = Prisma.CancellationRequestTransitionUpdateInput;

export const createCancellationRequestTransition = async (data: CancellationRequestTransitionCreateInput) => {
  return prisma.cancellationRequestTransition.create({ data });
};

export const getCancellationRequestTransitionById = async (id: string) => {
  return prisma.cancellationRequestTransition.findUnique({ where: { id } });
};

export const listCancellationRequestTransitions = async (filter: any = {}) => {
  return prisma.cancellationRequestTransition.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateCancellationRequestTransition = async (id: string, data: CancellationRequestTransitionUpdateInput) => {
  return prisma.cancellationRequestTransition.update({ where: { id }, data });
};

export const deleteCancellationRequestTransition = async (id: string) => {
  return prisma.cancellationRequestTransition.update({ where: { id }, data: { deletedAt: new Date() } });
};
