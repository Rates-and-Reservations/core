import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemUpdateWithoutBookingRateSnapshotInputSchema } from './BookingItemUpdateWithoutBookingRateSnapshotInputSchema';
import { BookingItemUncheckedUpdateWithoutBookingRateSnapshotInputSchema } from './BookingItemUncheckedUpdateWithoutBookingRateSnapshotInputSchema';
import { BookingItemCreateWithoutBookingRateSnapshotInputSchema } from './BookingItemCreateWithoutBookingRateSnapshotInputSchema';
import { BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema } from './BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema';

export const BookingItemUpsertWithWhereUniqueWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.BookingItemUpsertWithWhereUniqueWithoutBookingRateSnapshotInput> = z.object({
  where: z.lazy(() => BookingItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingItemUpdateWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutBookingRateSnapshotInputSchema) ]),
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema) ]),
}).strict();

export default BookingItemUpsertWithWhereUniqueWithoutBookingRateSnapshotInputSchema;
