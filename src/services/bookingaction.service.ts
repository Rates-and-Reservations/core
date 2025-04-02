import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingActionCreateInput = Prisma.BookingActionCreateInput;
type BookingActionUpdateInput = Prisma.BookingActionUpdateInput;

export const createBookingAction = async (data: BookingActionCreateInput) => {
  return prisma.bookingAction.create({ data });
};

export const getBookingActionById = async (id: string) => {
  return prisma.bookingAction.findUnique({ where: { id } });
};

export const listBookingActions = async (filter: any = {}) => {
  return prisma.bookingAction.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingAction = async (id: string, data: BookingActionUpdateInput) => {
  return prisma.bookingAction.update({ where: { id }, data });
};

export const deleteBookingAction = async (id: string) => {
  return prisma.bookingAction.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteBookingAction = async (id: string) => {
//   return prisma.bookingAction.delete({ where: { id } });
// };
