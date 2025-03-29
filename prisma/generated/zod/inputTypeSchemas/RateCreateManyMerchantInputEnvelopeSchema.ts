import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateManyMerchantInputSchema } from './RateCreateManyMerchantInputSchema';

export const RateCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.RateCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RateCreateManyMerchantInputSchema),z.lazy(() => RateCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RateCreateManyMerchantInputEnvelopeSchema;
