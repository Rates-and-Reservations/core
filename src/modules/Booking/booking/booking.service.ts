import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingCreateInput = Prisma.BookingCreateInput;
type BookingUpdateInput = Prisma.BookingUpdateInput;

export const createBooking = async (data: BookingCreateInput) => {
  return prisma.booking.create({ data });
};

export const getBookingById = async (id: string) => {
  return prisma.booking.findUnique({ where: { id } });
};

export const listBookings = async (filter: any = {}) => {
  return prisma.booking.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBooking = async (id: string, data: BookingUpdateInput) => {
  return prisma.booking.update({ where: { id }, data });
};

export const deleteBooking = async (id: string) => {
  return prisma.booking.update({ where: { id }, data: { deletedAt: new Date() } });
};
