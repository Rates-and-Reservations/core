import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type RefundLogCreateInput = Prisma.RefundLogCreateInput;
type RefundLogUpdateInput = Prisma.RefundLogUpdateInput;

export const createRefundLog = async (data: RefundLogCreateInput) => {
  return prisma.refundLog.create({ data });
};

export const getRefundLogById = async (id: string) => {
  return prisma.refundLog.findUnique({ where: { id } });
};

export const listRefundLogs = async (filter: any = {}) => {
  return prisma.refundLog.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateRefundLog = async (id: string, data: RefundLogUpdateInput) => {
  return prisma.refundLog.update({ where: { id }, data });
};

export const deleteRefundLog = async (id: string) => {
  return prisma.refundLog.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteRefundLog = async (id: string) => {
//   return prisma.refundLog.delete({ where: { id } });
// };
