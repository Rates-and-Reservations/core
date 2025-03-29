import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogCreateManyBookingInputSchema } from './BookingActivityLogCreateManyBookingInputSchema';

export const BookingActivityLogCreateManyBookingInputEnvelopeSchema: z.ZodType<Prisma.BookingActivityLogCreateManyBookingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingActivityLogCreateManyBookingInputSchema),z.lazy(() => BookingActivityLogCreateManyBookingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingActivityLogCreateManyBookingInputEnvelopeSchema;
