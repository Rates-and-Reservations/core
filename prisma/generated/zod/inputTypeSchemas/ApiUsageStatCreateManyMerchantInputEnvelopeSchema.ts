import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatCreateManyMerchantInputSchema } from './ApiUsageStatCreateManyMerchantInputSchema';

export const ApiUsageStatCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.ApiUsageStatCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ApiUsageStatCreateManyMerchantInputSchema),z.lazy(() => ApiUsageStatCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ApiUsageStatCreateManyMerchantInputEnvelopeSchema;
