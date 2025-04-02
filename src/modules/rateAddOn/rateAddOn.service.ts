import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type RateAddOnCreateInput = Prisma.RateAddOnCreateInput;
type RateAddOnUpdateInput = Prisma.RateAddOnUpdateInput;

export const createRateAddOn = async (data: RateAddOnCreateInput) => {
  return prisma.rateAddOn.create({ data });
};

export const getRateAddOnById = async (id: string) => {
  return prisma.rateAddOn.findUnique({ where: { id } });
};

export const listRateAddOns = async (filter: any = {}) => {
  return prisma.rateAddOn.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateRateAddOn = async (id: string, data: RateAddOnUpdateInput) => {
  return prisma.rateAddOn.update({ where: { id }, data });
};

export const deleteRateAddOn = async (id: string) => {
  return prisma.rateAddOn.update({ where: { id }, data: { deletedAt: new Date() } });
};
