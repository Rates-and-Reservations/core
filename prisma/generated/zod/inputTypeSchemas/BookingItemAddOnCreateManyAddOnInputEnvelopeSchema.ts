import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnCreateManyAddOnInputSchema } from './BookingItemAddOnCreateManyAddOnInputSchema';

export const BookingItemAddOnCreateManyAddOnInputEnvelopeSchema: z.ZodType<Prisma.BookingItemAddOnCreateManyAddOnInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingItemAddOnCreateManyAddOnInputSchema),z.lazy(() => BookingItemAddOnCreateManyAddOnInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingItemAddOnCreateManyAddOnInputEnvelopeSchema;
