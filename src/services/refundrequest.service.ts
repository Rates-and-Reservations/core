import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type RefundRequestCreateInput = Prisma.RefundRequestCreateInput;
type RefundRequestUpdateInput = Prisma.RefundRequestUpdateInput;

export const createRefundRequest = async (data: RefundRequestCreateInput) => {
  return prisma.refundRequest.create({ data });
};

export const getRefundRequestById = async (id: string) => {
  return prisma.refundRequest.findUnique({ where: { id } });
};

export const listRefundRequests = async (filter: any = {}) => {
  return prisma.refundRequest.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateRefundRequest = async (id: string, data: RefundRequestUpdateInput) => {
  return prisma.refundRequest.update({ where: { id }, data });
};

export const deleteRefundRequest = async (id: string) => {
  return prisma.refundRequest.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteRefundRequest = async (id: string) => {
//   return prisma.refundRequest.delete({ where: { id } });
// };
