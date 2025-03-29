import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateManyBookingInputSchema } from './BookingItemCreateManyBookingInputSchema';

export const BookingItemCreateManyBookingInputEnvelopeSchema: z.ZodType<Prisma.BookingItemCreateManyBookingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingItemCreateManyBookingInputSchema),z.lazy(() => BookingItemCreateManyBookingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingItemCreateManyBookingInputEnvelopeSchema;
