import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnCreateManyBookingItemInputSchema } from './BookingItemAddOnCreateManyBookingItemInputSchema';

export const BookingItemAddOnCreateManyBookingItemInputEnvelopeSchema: z.ZodType<Prisma.BookingItemAddOnCreateManyBookingItemInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingItemAddOnCreateManyBookingItemInputSchema),z.lazy(() => BookingItemAddOnCreateManyBookingItemInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingItemAddOnCreateManyBookingItemInputEnvelopeSchema;
