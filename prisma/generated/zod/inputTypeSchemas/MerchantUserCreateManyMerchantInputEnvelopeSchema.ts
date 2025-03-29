import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUserCreateManyMerchantInputSchema } from './MerchantUserCreateManyMerchantInputSchema';

export const MerchantUserCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.MerchantUserCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MerchantUserCreateManyMerchantInputSchema),z.lazy(() => MerchantUserCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MerchantUserCreateManyMerchantInputEnvelopeSchema;
