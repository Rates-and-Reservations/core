import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type InvoicePaymentCreateInput = Prisma.InvoicePaymentCreateInput;
type InvoicePaymentUpdateInput = Prisma.InvoicePaymentUpdateInput;

export const createInvoicePayment = async (data: InvoicePaymentCreateInput) => {
  return prisma.invoicePayment.create({ data });
};

export const getInvoicePaymentById = async (id: string) => {
  return prisma.invoicePayment.findUnique({ where: { id } });
};

export const listInvoicePayments = async (filter: any = {}) => {
  return prisma.invoicePayment.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateInvoicePayment = async (id: string, data: InvoicePaymentUpdateInput) => {
  return prisma.invoicePayment.update({ where: { id }, data });
};

export const deleteInvoicePayment = async (id: string) => {
  return prisma.invoicePayment.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteInvoicePayment = async (id: string) => {
//   return prisma.invoicePayment.delete({ where: { id } });
// };
