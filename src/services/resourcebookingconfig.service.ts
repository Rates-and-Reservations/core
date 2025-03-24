import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type ResourceBookingConfigCreateInput = Prisma.ResourceBookingConfigCreateInput;
type ResourceBookingConfigUpdateInput = Prisma.ResourceBookingConfigUpdateInput;

// Create ResourceBookingConfig
export const createResourceBookingConfig = async (data: ResourceBookingConfigCreateInput) => {
  return prisma.resourceBookingConfig.create({
    data,
  });
};

// Get ResourceBookingConfig by ID
export const getResourceBookingConfigById = async (id: string) => {
  return prisma.resourceBookingConfig.findUnique({
    where: { id },
  });
};

// List ResourceBookingConfigs
export const listResourceBookingConfigs = async (filter: any = {}) => {
  return prisma.resourceBookingConfig.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update ResourceBookingConfig
export const updateResourceBookingConfig = async (id: string, data: ResourceBookingConfigUpdateInput) => {
  return prisma.resourceBookingConfig.update({
    where: { id },
    data,
  });
};

// Delete ResourceBookingConfig
export const deleteResourceBookingConfig = async (id: string) => {
  return prisma.resourceBookingConfig.delete({
    where: { id },
  });
};
