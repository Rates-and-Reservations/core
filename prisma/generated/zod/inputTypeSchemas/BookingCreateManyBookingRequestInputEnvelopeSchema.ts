import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateManyBookingRequestInputSchema } from './BookingCreateManyBookingRequestInputSchema';

export const BookingCreateManyBookingRequestInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyBookingRequestInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyBookingRequestInputSchema),z.lazy(() => BookingCreateManyBookingRequestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingCreateManyBookingRequestInputEnvelopeSchema;
