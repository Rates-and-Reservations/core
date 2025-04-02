import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingActivityLogCreateInput = Prisma.BookingActivityLogCreateInput;
type BookingActivityLogUpdateInput = Prisma.BookingActivityLogUpdateInput;

export const createBookingActivityLog = async (data: BookingActivityLogCreateInput) => {
  return prisma.bookingActivityLog.create({ data });
};

export const getBookingActivityLogById = async (id: string) => {
  return prisma.bookingActivityLog.findUnique({ where: { id } });
};

export const listBookingActivityLogs = async (filter: any = {}) => {
  return prisma.bookingActivityLog.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingActivityLog = async (id: string, data: BookingActivityLogUpdateInput) => {
  return prisma.bookingActivityLog.update({ where: { id }, data });
};

export const deleteBookingActivityLog = async (id: string) => {
  return prisma.bookingActivityLog.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteBookingActivityLog = async (id: string) => {
//   return prisma.bookingActivityLog.delete({ where: { id } });
// };
