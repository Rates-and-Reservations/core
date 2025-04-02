import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingItemCreateInput = Prisma.BookingItemCreateInput;
type BookingItemUpdateInput = Prisma.BookingItemUpdateInput;

export const createBookingItem = async (data: BookingItemCreateInput) => {
  return prisma.bookingItem.create({ data });
};

export const getBookingItemById = async (id: string) => {
  return prisma.bookingItem.findUnique({ where: { id } });
};

export const listBookingItems = async (filter: any = {}) => {
  return prisma.bookingItem.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingItem = async (id: string, data: BookingItemUpdateInput) => {
  return prisma.bookingItem.update({ where: { id }, data });
};

export const deleteBookingItem = async (id: string) => {
  return prisma.bookingItem.update({ where: { id }, data: { deletedAt: new Date() } });
};
