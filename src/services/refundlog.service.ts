import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type RefundLogCreateInput = Prisma.RefundLogCreateInput;
type RefundLogUpdateInput = Prisma.RefundLogUpdateInput;

// Create RefundLog
export const createRefundLog = async (data: RefundLogCreateInput) => {
  return prisma.refundLog.create({
    data,
  });
};

// Get RefundLog by ID
export const getRefundLogById = async (id: string) => {
  return prisma.refundLog.findUnique({
    where: { id },
  });
};

// List RefundLogs
export const listRefundLogs = async (filter: any = {}) => {
  return prisma.refundLog.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update RefundLog
export const updateRefundLog = async (id: string, data: RefundLogUpdateInput) => {
  return prisma.refundLog.update({
    where: { id },
    data,
  });
};

// Delete RefundLog
export const deleteRefundLog = async (id: string) => {
  return prisma.refundLog.delete({
    where: { id },
  });
};
