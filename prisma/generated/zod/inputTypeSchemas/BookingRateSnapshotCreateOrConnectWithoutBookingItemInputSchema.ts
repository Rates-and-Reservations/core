import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotWhereUniqueInputSchema } from './BookingRateSnapshotWhereUniqueInputSchema';
import { BookingRateSnapshotCreateWithoutBookingItemInputSchema } from './BookingRateSnapshotCreateWithoutBookingItemInputSchema';
import { BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema } from './BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema';

export const BookingRateSnapshotCreateOrConnectWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingRateSnapshotCreateOrConnectWithoutBookingItemInput> = z.object({
  where: z.lazy(() => BookingRateSnapshotWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRateSnapshotCreateWithoutBookingItemInputSchema),z.lazy(() => BookingRateSnapshotUncheckedCreateWithoutBookingItemInputSchema) ]),
}).strict();

export default BookingRateSnapshotCreateOrConnectWithoutBookingItemInputSchema;
