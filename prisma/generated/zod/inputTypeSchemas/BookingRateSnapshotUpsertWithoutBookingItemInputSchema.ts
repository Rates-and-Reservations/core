import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotUpdateWithoutBookingItemInputSchema } from './BookingRateSnapshotUpdateWithoutBookingItemInputSchema';
import { BookingRateSnapshotUncheckedUpdateWithoutBookingItemInputSchema } from './BookingRateSnapshotUncheckedUpdateWithoutBookingItemInputSchema';
import { BookingRateSnapshotCreateWithoutBookingItemInputSchema } from './BookingRateSnapshotCreateWithoutBookingItemInputSchema';
import { BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema } from './BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema';
import { BookingRateSnapshotWhereInputSchema } from './BookingRateSnapshotWhereInputSchema';

export const BookingRateSnapshotUpsertWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingRateSnapshotUpsertWithoutBookingItemInput> = z.object({
  update: z.union([ z.lazy(() => BookingRateSnapshotUpdateWithoutBookingItemInputSchema),z.lazy(() => BookingRateSnapshotUncheckedUpdateWithoutBookingItemInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRateSnapshotCreateWithoutBookingItemInputSchema),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema) ]),
  where: z.lazy(() => BookingRateSnapshotWhereInputSchema).optional()
}).strict();

export default BookingRateSnapshotUpsertWithoutBookingItemInputSchema;
