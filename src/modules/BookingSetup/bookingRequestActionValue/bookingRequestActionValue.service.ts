import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingRequestActionValueCreateInput = Prisma.BookingRequestActionValueCreateInput;
type BookingRequestActionValueUpdateInput = Prisma.BookingRequestActionValueUpdateInput;

export const createBookingRequestActionValue = async (data: BookingRequestActionValueCreateInput) => {
  return prisma.bookingRequestActionValue.create({ data });
};

export const getBookingRequestActionValueById = async (id: string) => {
  return prisma.bookingRequestActionValue.findUnique({ where: { id } });
};

export const listBookingRequestActionValues = async (filter: any = {}) => {
  return prisma.bookingRequestActionValue.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingRequestActionValue = async (id: string, data: BookingRequestActionValueUpdateInput) => {
  return prisma.bookingRequestActionValue.update({ where: { id }, data });
};

export const deleteBookingRequestActionValue = async (id: string) => {
  return prisma.bookingRequestActionValue.update({ where: { id }, data: { deletedAt: new Date() } });
};
