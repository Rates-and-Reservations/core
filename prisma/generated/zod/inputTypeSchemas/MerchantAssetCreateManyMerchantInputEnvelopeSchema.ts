import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetCreateManyMerchantInputSchema } from './MerchantAssetCreateManyMerchantInputSchema';

export const MerchantAssetCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.MerchantAssetCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MerchantAssetCreateManyMerchantInputSchema),z.lazy(() => MerchantAssetCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MerchantAssetCreateManyMerchantInputEnvelopeSchema;
