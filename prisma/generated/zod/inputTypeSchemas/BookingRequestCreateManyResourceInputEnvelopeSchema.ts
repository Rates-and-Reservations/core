import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateManyResourceInputSchema } from './BookingRequestCreateManyResourceInputSchema';

export const BookingRequestCreateManyResourceInputEnvelopeSchema: z.ZodType<Prisma.BookingRequestCreateManyResourceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRequestCreateManyResourceInputSchema),z.lazy(() => BookingRequestCreateManyResourceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRequestCreateManyResourceInputEnvelopeSchema;
