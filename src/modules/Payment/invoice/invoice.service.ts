import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type InvoiceCreateInput = Prisma.InvoiceCreateInput;
type InvoiceUpdateInput = Prisma.InvoiceUpdateInput;

export const createInvoice = async (data: InvoiceCreateInput) => {
  return prisma.invoice.create({ data });
};

export const getInvoiceById = async (id: string) => {
  return prisma.invoice.findUnique({ where: { id } });
};

export const listInvoices = async (filter: any = {}) => {
  return prisma.invoice.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateInvoice = async (id: string, data: InvoiceUpdateInput) => {
  return prisma.invoice.update({ where: { id }, data });
};

export const deleteInvoice = async (id: string) => {
  return prisma.invoice.update({ where: { id }, data: { deletedAt: new Date() } });
};
