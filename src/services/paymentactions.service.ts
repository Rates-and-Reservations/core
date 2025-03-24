import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type PaymentActionsCreateInput = Prisma.PaymentActionsCreateInput;
type PaymentActionsUpdateInput = Prisma.PaymentActionsUpdateInput;

// Create PaymentActions
export const createPaymentActions = async (data: PaymentActionsCreateInput) => {
  return prisma.paymentActions.create({
    data,
  });
};

// Get PaymentActions by ID
export const getPaymentActionsById = async (id: string) => {
  return prisma.paymentActions.findUnique({
    where: { id },
  });
};

// List PaymentActionss
export const listPaymentActionss = async (filter: any = {}) => {
  return prisma.paymentActions.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update PaymentActions
export const updatePaymentActions = async (id: string, data: PaymentActionsUpdateInput) => {
  return prisma.paymentActions.update({
    where: { id },
    data,
  });
};

// Delete PaymentActions
export const deletePaymentActions = async (id: string) => {
  return prisma.paymentActions.delete({
    where: { id },
  });
};
