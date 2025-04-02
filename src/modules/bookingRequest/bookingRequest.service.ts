import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingRequestCreateInput = Prisma.BookingRequestCreateInput;
type BookingRequestUpdateInput = Prisma.BookingRequestUpdateInput;

export const createBookingRequest = async (data: BookingRequestCreateInput) => {
  return prisma.bookingRequest.create({ data });
};

export const getBookingRequestById = async (id: string) => {
  return prisma.bookingRequest.findUnique({ where: { id } });
};

export const listBookingRequests = async (filter: any = {}) => {
  return prisma.bookingRequest.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingRequest = async (id: string, data: BookingRequestUpdateInput) => {
  return prisma.bookingRequest.update({ where: { id }, data });
};

export const deleteBookingRequest = async (id: string) => {
  return prisma.bookingRequest.update({ where: { id }, data: { deletedAt: new Date() } });
};
