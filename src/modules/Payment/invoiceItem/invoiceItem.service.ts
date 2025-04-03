import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type InvoiceItemCreateInput = Prisma.InvoiceItemCreateInput;
type InvoiceItemUpdateInput = Prisma.InvoiceItemUpdateInput;

export const createInvoiceItem = async (data: InvoiceItemCreateInput) => {
  return prisma.invoiceItem.create({ data });
};

export const getInvoiceItemById = async (id: string) => {
  return prisma.invoiceItem.findUnique({ where: { id } });
};

export const listInvoiceItems = async (filter: any = {}) => {
  return prisma.invoiceItem.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateInvoiceItem = async (id: string, data: InvoiceItemUpdateInput) => {
  return prisma.invoiceItem.update({ where: { id }, data });
};

export const deleteInvoiceItem = async (id: string) => {
  return prisma.invoiceItem.update({ where: { id }, data: { deletedAt: new Date() } });
};
