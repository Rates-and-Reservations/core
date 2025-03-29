import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogCreateManyMerchantInputSchema } from './BookingActivityLogCreateManyMerchantInputSchema';

export const BookingActivityLogCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.BookingActivityLogCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingActivityLogCreateManyMerchantInputSchema),z.lazy(() => BookingActivityLogCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingActivityLogCreateManyMerchantInputEnvelopeSchema;
