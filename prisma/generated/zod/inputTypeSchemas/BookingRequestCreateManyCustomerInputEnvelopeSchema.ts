import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateManyCustomerInputSchema } from './BookingRequestCreateManyCustomerInputSchema';

export const BookingRequestCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.BookingRequestCreateManyCustomerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRequestCreateManyCustomerInputSchema),z.lazy(() => BookingRequestCreateManyCustomerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRequestCreateManyCustomerInputEnvelopeSchema;
