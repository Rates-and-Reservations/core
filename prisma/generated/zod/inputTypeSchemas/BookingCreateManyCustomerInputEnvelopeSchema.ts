import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateManyCustomerInputSchema } from './BookingCreateManyCustomerInputSchema';

export const BookingCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyCustomerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyCustomerInputSchema),z.lazy(() => BookingCreateManyCustomerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingCreateManyCustomerInputEnvelopeSchema;
