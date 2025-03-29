import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnCreateManyAddOnInputSchema } from './BookingAddOnCreateManyAddOnInputSchema';

export const BookingAddOnCreateManyAddOnInputEnvelopeSchema: z.ZodType<Prisma.BookingAddOnCreateManyAddOnInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingAddOnCreateManyAddOnInputSchema),z.lazy(() => BookingAddOnCreateManyAddOnInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingAddOnCreateManyAddOnInputEnvelopeSchema;
