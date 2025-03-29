import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemCreateWithoutBookingRateSnapshotInputSchema } from './BookingItemCreateWithoutBookingRateSnapshotInputSchema';
import { BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema } from './BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema';

export const BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.BookingItemCreateOrConnectWithoutBookingRateSnapshotInput> = z.object({
  where: z.lazy(() => BookingItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingItemCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutBookingRateSnapshotInputSchema) ]),
}).strict();

export default BookingItemCreateOrConnectWithoutBookingRateSnapshotInputSchema;
