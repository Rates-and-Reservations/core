import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type AppCreateInput = Prisma.AppCreateInput;
type AppUpdateInput = Prisma.AppUpdateInput;

// Create App
export const createApp = async (data: AppCreateInput) => {
  return prisma.app.create({
    data,
  });
};

// Get App by ID
export const getAppById = async (id: string) => {
  return prisma.app.findUnique({
    where: { id },
  });
};

// List Apps
export const listApps = async (filter: any = {}) => {
  return prisma.app.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update App
export const updateApp = async (id: string, data: AppUpdateInput) => {
  return prisma.app.update({
    where: { id },
    data,
  });
};

// Delete App
export const deleteApp = async (id: string) => {
  return prisma.app.delete({
    where: { id },
  });
};
