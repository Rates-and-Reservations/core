import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateManyMerchantInputSchema } from './ResourceCreateManyMerchantInputSchema';

export const ResourceCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.ResourceCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ResourceCreateManyMerchantInputSchema),z.lazy(() => ResourceCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ResourceCreateManyMerchantInputEnvelopeSchema;
