import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type CustomerCreateInput = Prisma.CustomerCreateInput;
type CustomerUpdateInput = Prisma.CustomerUpdateInput;

export const createCustomer = async (data: CustomerCreateInput) => {
  return prisma.customer.create({ data });
};

export const getCustomerById = async (id: string) => {
  return prisma.customer.findUnique({ where: { id } });
};

export const listCustomers = async (filter: any = {}) => {
  return prisma.customer.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateCustomer = async (id: string, data: CustomerUpdateInput) => {
  return prisma.customer.update({ where: { id }, data });
};

export const deleteCustomer = async (id: string) => {
  return prisma.customer.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteCustomer = async (id: string) => {
//   return prisma.customer.delete({ where: { id } });
// };
