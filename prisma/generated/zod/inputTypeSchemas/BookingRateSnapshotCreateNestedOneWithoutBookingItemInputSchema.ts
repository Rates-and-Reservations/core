import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotCreateWithoutBookingItemInputSchema } from './BookingRateSnapshotCreateWithoutBookingItemInputSchema';
import { BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema } from './BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema';
import { BookingRateSnapshotCreateOrConnectWithoutBookingItemInputSchema } from './BookingRateSnapshotCreateOrConnectWithoutBookingItemInputSchema';
import { BookingRateSnapshotWhereUniqueInputSchema } from './BookingRateSnapshotWhereUniqueInputSchema';

export const BookingRateSnapshotCreateNestedOneWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingRateSnapshotCreateNestedOneWithoutBookingItemInput> = z.object({
  create: z.union([ z.lazy(() => BookingRateSnapshotCreateWithoutBookingItemInputSchema),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingRateSnapshotCreateOrConnectWithoutBookingItemInputSchema).optional(),
  connect: z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema).optional()
}).strict();

export default BookingRateSnapshotCreateNestedOneWithoutBookingItemInputSchema;
