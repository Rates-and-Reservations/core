import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateManyMerchantInputSchema } from './RefundRequestCreateManyMerchantInputSchema';

export const RefundRequestCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.RefundRequestCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RefundRequestCreateManyMerchantInputSchema),z.lazy(() => RefundRequestCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RefundRequestCreateManyMerchantInputEnvelopeSchema;
