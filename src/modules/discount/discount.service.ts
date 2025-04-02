import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type DiscountCreateInput = Prisma.DiscountCreateInput;
type DiscountUpdateInput = Prisma.DiscountUpdateInput;

export const createDiscount = async (data: DiscountCreateInput) => {
  return prisma.discount.create({ data });
};

export const getDiscountById = async (id: string) => {
  return prisma.discount.findUnique({ where: { id } });
};

export const listDiscounts = async (filter: any = {}) => {
  return prisma.discount.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateDiscount = async (id: string, data: DiscountUpdateInput) => {
  return prisma.discount.update({ where: { id }, data });
};

export const deleteDiscount = async (id: string) => {
  return prisma.discount.update({ where: { id }, data: { deletedAt: new Date() } });
};
