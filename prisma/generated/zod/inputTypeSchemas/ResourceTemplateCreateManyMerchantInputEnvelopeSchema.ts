import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateCreateManyMerchantInputSchema } from './ResourceTemplateCreateManyMerchantInputSchema';

export const ResourceTemplateCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.ResourceTemplateCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ResourceTemplateCreateManyMerchantInputSchema),z.lazy(() => ResourceTemplateCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ResourceTemplateCreateManyMerchantInputEnvelopeSchema;
