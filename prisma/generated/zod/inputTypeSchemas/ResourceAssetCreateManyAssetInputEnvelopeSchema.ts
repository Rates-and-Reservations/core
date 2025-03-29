import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetCreateManyAssetInputSchema } from './ResourceAssetCreateManyAssetInputSchema';

export const ResourceAssetCreateManyAssetInputEnvelopeSchema: z.ZodType<Prisma.ResourceAssetCreateManyAssetInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ResourceAssetCreateManyAssetInputSchema),z.lazy(() => ResourceAssetCreateManyAssetInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ResourceAssetCreateManyAssetInputEnvelopeSchema;
