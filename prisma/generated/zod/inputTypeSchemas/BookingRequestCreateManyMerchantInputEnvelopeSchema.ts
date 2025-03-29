import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateManyMerchantInputSchema } from './BookingRequestCreateManyMerchantInputSchema';

export const BookingRequestCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.BookingRequestCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRequestCreateManyMerchantInputSchema),z.lazy(() => BookingRequestCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRequestCreateManyMerchantInputEnvelopeSchema;
