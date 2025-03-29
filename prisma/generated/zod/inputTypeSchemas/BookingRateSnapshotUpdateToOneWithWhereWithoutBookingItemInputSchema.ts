import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotWhereInputSchema } from './BookingRateSnapshotWhereInputSchema';
import { BookingRateSnapshotUpdateWithoutBookingItemInputSchema } from './BookingRateSnapshotUpdateWithoutBookingItemInputSchema';
import { BookingRateSnapshotUncheckedUpdateWithoutBookingItemInputSchema } from './BookingRateSnapshotUncheckedUpdateWithoutBookingItemInputSchema';

export const BookingRateSnapshotUpdateToOneWithWhereWithoutBookingItemInputSchema: z.ZodType<Prisma.BookingRateSnapshotUpdateToOneWithWhereWithoutBookingItemInput> = z.object({
  where: z.lazy(() => BookingRateSnapshotWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingRateSnapshotUpdateWithoutBookingItemInputSchema),z.lazy(() => BookingRateSnapshotUncheckedUpdateWithoutBookingItemInputSchema) ]),
}).strict();

export default BookingRateSnapshotUpdateToOneWithWhereWithoutBookingItemInputSchema;
