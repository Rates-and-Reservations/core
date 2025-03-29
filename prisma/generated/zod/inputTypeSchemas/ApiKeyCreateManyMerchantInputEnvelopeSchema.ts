import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyCreateManyMerchantInputSchema } from './ApiKeyCreateManyMerchantInputSchema';

export const ApiKeyCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.ApiKeyCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ApiKeyCreateManyMerchantInputSchema),z.lazy(() => ApiKeyCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ApiKeyCreateManyMerchantInputEnvelopeSchema;
