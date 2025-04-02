import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type ResourceBookingConfigCreateInput = Prisma.ResourceBookingConfigCreateInput;
type ResourceBookingConfigUpdateInput = Prisma.ResourceBookingConfigUpdateInput;

export const createResourceBookingConfig = async (data: ResourceBookingConfigCreateInput) => {
  return prisma.resourceBookingConfig.create({ data });
};

export const getResourceBookingConfigById = async (id: string) => {
  return prisma.resourceBookingConfig.findUnique({ where: { id } });
};

export const listResourceBookingConfigs = async (filter: any = {}) => {
  return prisma.resourceBookingConfig.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateResourceBookingConfig = async (id: string, data: ResourceBookingConfigUpdateInput) => {
  return prisma.resourceBookingConfig.update({ where: { id }, data });
};

export const deleteResourceBookingConfig = async (id: string) => {
  return prisma.resourceBookingConfig.update({ where: { id }, data: { deletedAt: new Date() } });
};
