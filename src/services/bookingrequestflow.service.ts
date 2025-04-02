import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingRequestFlowCreateInput = Prisma.BookingRequestFlowCreateInput;
type BookingRequestFlowUpdateInput = Prisma.BookingRequestFlowUpdateInput;

export const createBookingRequestFlow = async (data: BookingRequestFlowCreateInput) => {
  return prisma.bookingRequestFlow.create({ data });
};

export const getBookingRequestFlowById = async (id: string) => {
  return prisma.bookingRequestFlow.findUnique({ where: { id } });
};

export const listBookingRequestFlows = async (filter: any = {}) => {
  return prisma.bookingRequestFlow.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingRequestFlow = async (id: string, data: BookingRequestFlowUpdateInput) => {
  return prisma.bookingRequestFlow.update({ where: { id }, data });
};

export const deleteBookingRequestFlow = async (id: string) => {
  return prisma.bookingRequestFlow.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteBookingRequestFlow = async (id: string) => {
//   return prisma.bookingRequestFlow.delete({ where: { id } });
// };
