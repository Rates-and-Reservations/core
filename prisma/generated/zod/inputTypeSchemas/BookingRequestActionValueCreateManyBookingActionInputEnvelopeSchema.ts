import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueCreateManyBookingActionInputSchema } from './BookingRequestActionValueCreateManyBookingActionInputSchema';

export const BookingRequestActionValueCreateManyBookingActionInputEnvelopeSchema: z.ZodType<Prisma.BookingRequestActionValueCreateManyBookingActionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRequestActionValueCreateManyBookingActionInputSchema),z.lazy(() => BookingRequestActionValueCreateManyBookingActionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRequestActionValueCreateManyBookingActionInputEnvelopeSchema;
