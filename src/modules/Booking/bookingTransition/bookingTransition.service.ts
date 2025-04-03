import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingTransitionCreateInput = Prisma.BookingTransitionCreateInput;
type BookingTransitionUpdateInput = Prisma.BookingTransitionUpdateInput;

export const createBookingTransition = async (data: BookingTransitionCreateInput) => {
  return prisma.bookingTransition.create({ data });
};

export const getBookingTransitionById = async (id: string) => {
  return prisma.bookingTransition.findUnique({ where: { id } });
};

export const listBookingTransitions = async (filter: any = {}) => {
  return prisma.bookingTransition.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingTransition = async (id: string, data: BookingTransitionUpdateInput) => {
  return prisma.bookingTransition.update({ where: { id }, data });
};

export const deleteBookingTransition = async (id: string) => {
  return prisma.bookingTransition.update({ where: { id }, data: { deletedAt: new Date() } });
};
