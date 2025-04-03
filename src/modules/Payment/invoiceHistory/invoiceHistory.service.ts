import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type InvoiceHistoryCreateInput = Prisma.InvoiceHistoryCreateInput;
type InvoiceHistoryUpdateInput = Prisma.InvoiceHistoryUpdateInput;

export const createInvoiceHistory = async (data: InvoiceHistoryCreateInput) => {
  return prisma.invoiceHistory.create({ data });
};

export const getInvoiceHistoryById = async (id: string) => {
  return prisma.invoiceHistory.findUnique({ where: { id } });
};

export const listInvoiceHistorys = async (filter: any = {}) => {
  return prisma.invoiceHistory.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateInvoiceHistory = async (id: string, data: InvoiceHistoryUpdateInput) => {
  return prisma.invoiceHistory.update({ where: { id }, data });
};

export const deleteInvoiceHistory = async (id: string) => {
  return prisma.invoiceHistory.update({ where: { id }, data: { deletedAt: new Date() } });
};
