import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueCreateManyBookingRequestInputSchema } from './BookingRequestActionValueCreateManyBookingRequestInputSchema';

export const BookingRequestActionValueCreateManyBookingRequestInputEnvelopeSchema: z.ZodType<Prisma.BookingRequestActionValueCreateManyBookingRequestInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRequestActionValueCreateManyBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueCreateManyBookingRequestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRequestActionValueCreateManyBookingRequestInputEnvelopeSchema;
