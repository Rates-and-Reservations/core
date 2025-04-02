import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type PaymentActionsCreateInput = Prisma.PaymentActionsCreateInput;
type PaymentActionsUpdateInput = Prisma.PaymentActionsUpdateInput;

export const createPaymentActions = async (data: PaymentActionsCreateInput) => {
  return prisma.paymentActions.create({ data });
};

export const getPaymentActionsById = async (id: string) => {
  return prisma.paymentActions.findUnique({ where: { id } });
};

export const listPaymentActionss = async (filter: any = {}) => {
  return prisma.paymentActions.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updatePaymentActions = async (id: string, data: PaymentActionsUpdateInput) => {
  return prisma.paymentActions.update({ where: { id }, data });
};

export const deletePaymentActions = async (id: string) => {
  return prisma.paymentActions.update({ where: { id }, data: { deletedAt: new Date() } });
};
