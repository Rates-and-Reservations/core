import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type InvoiceCreateInput = Prisma.InvoiceCreateInput;
type InvoiceUpdateInput = Prisma.InvoiceUpdateInput;

// Create Invoice
export const createInvoice = async (data: InvoiceCreateInput) => {
  return prisma.invoice.create({
    data,
  });
};

// Get Invoice by ID
export const getInvoiceById = async (id: string) => {
  return prisma.invoice.findUnique({
    where: { id },
  });
};

// List Invoices
export const listInvoices = async (filter: any = {}) => {
  return prisma.invoice.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update Invoice
export const updateInvoice = async (id: string, data: InvoiceUpdateInput) => {
  return prisma.invoice.update({
    where: { id },
    data,
  });
};

// Delete Invoice
export const deleteInvoice = async (id: string) => {
  return prisma.invoice.delete({
    where: { id },
  });
};
