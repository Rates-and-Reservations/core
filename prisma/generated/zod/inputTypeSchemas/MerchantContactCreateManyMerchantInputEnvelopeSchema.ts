import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantContactCreateManyMerchantInputSchema } from './MerchantContactCreateManyMerchantInputSchema';

export const MerchantContactCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.MerchantContactCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MerchantContactCreateManyMerchantInputSchema),z.lazy(() => MerchantContactCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MerchantContactCreateManyMerchantInputEnvelopeSchema;
