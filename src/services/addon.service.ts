import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type AddOnCreateInput = Prisma.AddOnCreateInput;
type AddOnUpdateInput = Prisma.AddOnUpdateInput;

export const createAddOn = async (data: AddOnCreateInput) => {
  return prisma.addOn.create({ data });
};

export const getAddOnById = async (id: string) => {
  return prisma.addOn.findUnique({ where: { id } });
};

export const listAddOns = async (filter: any = {}) => {
  return prisma.addOn.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateAddOn = async (id: string, data: AddOnUpdateInput) => {
  return prisma.addOn.update({ where: { id }, data });
};

export const deleteAddOn = async (id: string) => {
  return prisma.addOn.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteAddOn = async (id: string) => {
//   return prisma.addOn.delete({ where: { id } });
// };
