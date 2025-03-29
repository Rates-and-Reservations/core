import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogCreateManyMerchantInputSchema } from './ApiUsageLogCreateManyMerchantInputSchema';

export const ApiUsageLogCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.ApiUsageLogCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ApiUsageLogCreateManyMerchantInputSchema),z.lazy(() => ApiUsageLogCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ApiUsageLogCreateManyMerchantInputEnvelopeSchema;
