import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type WaitlistEntryTransitionCreateInput = Prisma.WaitlistEntryTransitionCreateInput;
type WaitlistEntryTransitionUpdateInput = Prisma.WaitlistEntryTransitionUpdateInput;

export const createWaitlistEntryTransition = async (data: WaitlistEntryTransitionCreateInput) => {
  return prisma.waitlistEntryTransition.create({ data });
};

export const getWaitlistEntryTransitionById = async (id: string) => {
  return prisma.waitlistEntryTransition.findUnique({ where: { id } });
};

export const listWaitlistEntryTransitions = async (filter: any = {}) => {
  return prisma.waitlistEntryTransition.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateWaitlistEntryTransition = async (id: string, data: WaitlistEntryTransitionUpdateInput) => {
  return prisma.waitlistEntryTransition.update({ where: { id }, data });
};

export const deleteWaitlistEntryTransition = async (id: string) => {
  return prisma.waitlistEntryTransition.update({ where: { id }, data: { deletedAt: new Date() } });
};
