import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowCreateManyBookingRequestInputSchema } from './BookingRequestFlowCreateManyBookingRequestInputSchema';

export const BookingRequestFlowCreateManyBookingRequestInputEnvelopeSchema: z.ZodType<Prisma.BookingRequestFlowCreateManyBookingRequestInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRequestFlowCreateManyBookingRequestInputSchema),z.lazy(() => BookingRequestFlowCreateManyBookingRequestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRequestFlowCreateManyBookingRequestInputEnvelopeSchema;
