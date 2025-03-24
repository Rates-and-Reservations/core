import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type BookingAddOnCreateInput = Prisma.BookingAddOnCreateInput;
type BookingAddOnUpdateInput = Prisma.BookingAddOnUpdateInput;

// Create BookingAddOn
export const createBookingAddOn = async (data: BookingAddOnCreateInput) => {
  return prisma.bookingAddOn.create({
    data,
  });
};

// Get BookingAddOn by ID
export const getBookingAddOnById = async (id: string) => {
  return prisma.bookingAddOn.findUnique({
    where: { id },
  });
};

// List BookingAddOns
export const listBookingAddOns = async (filter: any = {}) => {
  return prisma.bookingAddOn.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update BookingAddOn
export const updateBookingAddOn = async (id: string, data: BookingAddOnUpdateInput) => {
  return prisma.bookingAddOn.update({
    where: { id },
    data,
  });
};

// Delete BookingAddOn
export const deleteBookingAddOn = async (id: string) => {
  return prisma.bookingAddOn.delete({
    where: { id },
  });
};
