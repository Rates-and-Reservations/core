import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type BookingRequestFlowCreateInput = Prisma.BookingRequestFlowCreateInput;
type BookingRequestFlowUpdateInput = Prisma.BookingRequestFlowUpdateInput;

// Create BookingRequestFlow
export const createBookingRequestFlow = async (data: BookingRequestFlowCreateInput) => {
  return prisma.bookingRequestFlow.create({
    data,
  });
};

// Get BookingRequestFlow by ID
export const getBookingRequestFlowById = async (id: string) => {
  return prisma.bookingRequestFlow.findUnique({
    where: { id },
  });
};

// List BookingRequestFlows
export const listBookingRequestFlows = async (filter: any = {}) => {
  return prisma.bookingRequestFlow.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update BookingRequestFlow
export const updateBookingRequestFlow = async (id: string, data: BookingRequestFlowUpdateInput) => {
  return prisma.bookingRequestFlow.update({
    where: { id },
    data,
  });
};

// Delete BookingRequestFlow
export const deleteBookingRequestFlow = async (id: string) => {
  return prisma.bookingRequestFlow.delete({
    where: { id },
  });
};
