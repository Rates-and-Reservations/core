import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type BookingRateSnapshotCreateInput = Prisma.BookingRateSnapshotCreateInput;
type BookingRateSnapshotUpdateInput = Prisma.BookingRateSnapshotUpdateInput;

export const createBookingRateSnapshot = async (data: BookingRateSnapshotCreateInput) => {
  return prisma.bookingRateSnapshot.create({ data });
};

export const getBookingRateSnapshotById = async (id: string) => {
  return prisma.bookingRateSnapshot.findUnique({ where: { id } });
};

export const listBookingRateSnapshots = async (filter: any = {}) => {
  return prisma.bookingRateSnapshot.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateBookingRateSnapshot = async (id: string, data: BookingRateSnapshotUpdateInput) => {
  return prisma.bookingRateSnapshot.update({ where: { id }, data });
};

export const deleteBookingRateSnapshot = async (id: string) => {
  return prisma.bookingRateSnapshot.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteBookingRateSnapshot = async (id: string) => {
//   return prisma.bookingRateSnapshot.delete({ where: { id } });
// };
