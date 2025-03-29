import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateManyMerchantInputSchema } from './BookingCreateManyMerchantInputSchema';

export const BookingCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyMerchantInputSchema),z.lazy(() => BookingCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingCreateManyMerchantInputEnvelopeSchema;
