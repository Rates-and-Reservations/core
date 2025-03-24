import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type CustomerCreateInput = Prisma.CustomerCreateInput;
type CustomerUpdateInput = Prisma.CustomerUpdateInput;

// Create Customer
export const createCustomer = async (data: CustomerCreateInput) => {
  return prisma.customer.create({
    data,
  });
};

// Get Customer by ID
export const getCustomerById = async (id: string) => {
  return prisma.customer.findUnique({
    where: { id },
  });
};

// List Customers
export const listCustomers = async (filter: any = {}) => {
  return prisma.customer.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update Customer
export const updateCustomer = async (id: string, data: CustomerUpdateInput) => {
  return prisma.customer.update({
    where: { id },
    data,
  });
};

// Delete Customer
export const deleteCustomer = async (id: string) => {
  return prisma.customer.delete({
    where: { id },
  });
};
