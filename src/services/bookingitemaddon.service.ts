import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingItemAddOnCreateInput = Prisma.BookingItemAddOnCreateInput;
type BookingItemAddOnUpdateInput = Prisma.BookingItemAddOnUpdateInput;

export const createBookingItemAddOn = async (data: BookingItemAddOnCreateInput) => {
  return prisma.bookingItemAddOn.create({ data });
};

export const getBookingItemAddOnById = async (id: string) => {
  return prisma.bookingItemAddOn.findUnique({ where: { id } });
};

export const listBookingItemAddOns = async (filter: any = {}) => {
  return prisma.bookingItemAddOn.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingItemAddOn = async (id: string, data: BookingItemAddOnUpdateInput) => {
  return prisma.bookingItemAddOn.update({ where: { id }, data });
};

export const deleteBookingItemAddOn = async (id: string) => {
  return prisma.bookingItemAddOn.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteBookingItemAddOn = async (id: string) => {
//   return prisma.bookingItemAddOn.delete({ where: { id } });
// };
