import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnCreateManyBookingInputSchema } from './BookingAddOnCreateManyBookingInputSchema';

export const BookingAddOnCreateManyBookingInputEnvelopeSchema: z.ZodType<Prisma.BookingAddOnCreateManyBookingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingAddOnCreateManyBookingInputSchema),z.lazy(() => BookingAddOnCreateManyBookingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingAddOnCreateManyBookingInputEnvelopeSchema;
