import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type BookingPageCreateInput = Prisma.BookingPageCreateInput;
type BookingPageUpdateInput = Prisma.BookingPageUpdateInput;

// Create BookingPage
export const createBookingPage = async (data: BookingPageCreateInput) => {
  return prisma.bookingPage.create({
    data,
  });
};

// Get BookingPage by ID
export const getBookingPageById = async (id: string) => {
  return prisma.bookingPage.findUnique({
    where: { id },
  });
};

// List BookingPages
export const listBookingPages = async (filter: any = {}) => {
  return prisma.bookingPage.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update BookingPage
export const updateBookingPage = async (id: string, data: BookingPageUpdateInput) => {
  return prisma.bookingPage.update({
    where: { id },
    data,
  });
};

// Delete BookingPage
export const deleteBookingPage = async (id: string) => {
  return prisma.bookingPage.delete({
    where: { id },
  });
};
