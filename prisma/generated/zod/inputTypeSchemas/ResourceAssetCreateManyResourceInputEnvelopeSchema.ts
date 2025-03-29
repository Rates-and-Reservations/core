import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetCreateManyResourceInputSchema } from './ResourceAssetCreateManyResourceInputSchema';

export const ResourceAssetCreateManyResourceInputEnvelopeSchema: z.ZodType<Prisma.ResourceAssetCreateManyResourceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ResourceAssetCreateManyResourceInputSchema),z.lazy(() => ResourceAssetCreateManyResourceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ResourceAssetCreateManyResourceInputEnvelopeSchema;
