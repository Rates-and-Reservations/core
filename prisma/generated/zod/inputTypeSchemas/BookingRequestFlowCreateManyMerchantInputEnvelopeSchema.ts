import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowCreateManyMerchantInputSchema } from './BookingRequestFlowCreateManyMerchantInputSchema';

export const BookingRequestFlowCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.BookingRequestFlowCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRequestFlowCreateManyMerchantInputSchema),z.lazy(() => BookingRequestFlowCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRequestFlowCreateManyMerchantInputEnvelopeSchema;
