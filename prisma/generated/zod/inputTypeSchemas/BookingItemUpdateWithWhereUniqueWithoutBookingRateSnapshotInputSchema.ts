import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemUpdateWithoutBookingRateSnapshotInputSchema } from './BookingItemUpdateWithoutBookingRateSnapshotInputSchema';
import { BookingItemUncheckedUpdateWithoutBookingRateSnapshotInputSchema } from './BookingItemUncheckedUpdateWithoutBookingRateSnapshotInputSchema';

export const BookingItemUpdateWithWhereUniqueWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.BookingItemUpdateWithWhereUniqueWithoutBookingRateSnapshotInput> = z.object({
  where: z.lazy(() => BookingItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingItemUpdateWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutBookingRateSnapshotInputSchema) ]),
}).strict();

export default BookingItemUpdateWithWhereUniqueWithoutBookingRateSnapshotInputSchema;
