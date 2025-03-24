import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type BookingCreateInput = Prisma.BookingCreateInput;
type BookingUpdateInput = Prisma.BookingUpdateInput;

// Create Booking
export const createBooking = async (data: BookingCreateInput) => {
  return prisma.booking.create({
    data,
  });
};

// Get Booking by ID
export const getBookingById = async (id: string) => {
  return prisma.booking.findUnique({
    where: { id },
  });
};

// List Bookings
export const listBookings = async (filter: any = {}) => {
  return prisma.booking.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update Booking
export const updateBooking = async (id: string, data: BookingUpdateInput) => {
  return prisma.booking.update({
    where: { id },
    data,
  });
};

// Delete Booking
export const deleteBooking = async (id: string) => {
  return prisma.booking.delete({
    where: { id },
  });
};
