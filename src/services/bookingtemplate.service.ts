import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingTemplateCreateInput = Prisma.BookingTemplateCreateInput;
type BookingTemplateUpdateInput = Prisma.BookingTemplateUpdateInput;

export const createBookingTemplate = async (data: BookingTemplateCreateInput) => {
  return prisma.bookingTemplate.create({ data });
};

export const getBookingTemplateById = async (id: string) => {
  return prisma.bookingTemplate.findUnique({ where: { id } });
};

export const listBookingTemplates = async (filter: any = {}) => {
  return prisma.bookingTemplate.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingTemplate = async (id: string, data: BookingTemplateUpdateInput) => {
  return prisma.bookingTemplate.update({ where: { id }, data });
};

export const deleteBookingTemplate = async (id: string) => {
  return prisma.bookingTemplate.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteBookingTemplate = async (id: string) => {
//   return prisma.bookingTemplate.delete({ where: { id } });
// };
