import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingAddOnCreateInput = Prisma.BookingAddOnCreateInput;
type BookingAddOnUpdateInput = Prisma.BookingAddOnUpdateInput;

export const createBookingAddOn = async (data: BookingAddOnCreateInput) => {
  return prisma.bookingAddOn.create({ data });
};

export const getBookingAddOnById = async (id: string) => {
  return prisma.bookingAddOn.findUnique({ where: { id } });
};

export const listBookingAddOns = async (filter: any = {}) => {
  return prisma.bookingAddOn.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingAddOn = async (id: string, data: BookingAddOnUpdateInput) => {
  return prisma.bookingAddOn.update({ where: { id }, data });
};

export const deleteBookingAddOn = async (id: string) => {
  return prisma.bookingAddOn.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteBookingAddOn = async (id: string) => {
//   return prisma.bookingAddOn.delete({ where: { id } });
// };
