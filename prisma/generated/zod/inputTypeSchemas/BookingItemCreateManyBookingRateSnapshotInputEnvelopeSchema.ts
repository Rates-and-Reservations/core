import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateManyBookingRateSnapshotInputSchema } from './BookingItemCreateManyBookingRateSnapshotInputSchema';

export const BookingItemCreateManyBookingRateSnapshotInputEnvelopeSchema: z.ZodType<Prisma.BookingItemCreateManyBookingRateSnapshotInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingItemCreateManyBookingRateSnapshotInputSchema),z.lazy(() => BookingItemCreateManyBookingRateSnapshotInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingItemCreateManyBookingRateSnapshotInputEnvelopeSchema;
