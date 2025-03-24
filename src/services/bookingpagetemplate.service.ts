import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type BookingPageTemplateCreateInput = Prisma.BookingPageTemplateCreateInput;
type BookingPageTemplateUpdateInput = Prisma.BookingPageTemplateUpdateInput;

// Create BookingPageTemplate
export const createBookingPageTemplate = async (data: BookingPageTemplateCreateInput) => {
  return prisma.bookingPageTemplate.create({
    data,
  });
};

// Get BookingPageTemplate by ID
export const getBookingPageTemplateById = async (id: string) => {
  return prisma.bookingPageTemplate.findUnique({
    where: { id },
  });
};

// List BookingPageTemplates
export const listBookingPageTemplates = async (filter: any = {}) => {
  return prisma.bookingPageTemplate.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update BookingPageTemplate
export const updateBookingPageTemplate = async (id: string, data: BookingPageTemplateUpdateInput) => {
  return prisma.bookingPageTemplate.update({
    where: { id },
    data,
  });
};

// Delete BookingPageTemplate
export const deleteBookingPageTemplate = async (id: string) => {
  return prisma.bookingPageTemplate.delete({
    where: { id },
  });
};
