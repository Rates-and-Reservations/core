import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingItemTransitionCreateInput = Prisma.BookingItemTransitionCreateInput;
type BookingItemTransitionUpdateInput = Prisma.BookingItemTransitionUpdateInput;

export const createBookingItemTransition = async (data: BookingItemTransitionCreateInput) => {
  return prisma.bookingItemTransition.create({ data });
};

export const getBookingItemTransitionById = async (id: string) => {
  return prisma.bookingItemTransition.findUnique({ where: { id } });
};

export const listBookingItemTransitions = async (filter: any = {}) => {
  return prisma.bookingItemTransition.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingItemTransition = async (id: string, data: BookingItemTransitionUpdateInput) => {
  return prisma.bookingItemTransition.update({ where: { id }, data });
};

export const deleteBookingItemTransition = async (id: string) => {
  return prisma.bookingItemTransition.update({ where: { id }, data: { deletedAt: new Date() } });
};
