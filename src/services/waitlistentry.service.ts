import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type WaitlistEntryCreateInput = Prisma.WaitlistEntryCreateInput;
type WaitlistEntryUpdateInput = Prisma.WaitlistEntryUpdateInput;

// Create WaitlistEntry
export const createWaitlistEntry = async (data: WaitlistEntryCreateInput) => {
  return prisma.waitlistEntry.create({
    data,
  });
};

// Get WaitlistEntry by ID
export const getWaitlistEntryById = async (id: string) => {
  return prisma.waitlistEntry.findUnique({
    where: { id },
  });
};

// List WaitlistEntrys
export const listWaitlistEntrys = async (filter: any = {}) => {
  return prisma.waitlistEntry.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update WaitlistEntry
export const updateWaitlistEntry = async (id: string, data: WaitlistEntryUpdateInput) => {
  return prisma.waitlistEntry.update({
    where: { id },
    data,
  });
};

// Delete WaitlistEntry
export const deleteWaitlistEntry = async (id: string) => {
  return prisma.waitlistEntry.delete({
    where: { id },
  });
};
