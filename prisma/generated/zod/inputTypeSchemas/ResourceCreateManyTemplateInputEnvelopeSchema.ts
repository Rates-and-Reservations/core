import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateManyTemplateInputSchema } from './ResourceCreateManyTemplateInputSchema';

export const ResourceCreateManyTemplateInputEnvelopeSchema: z.ZodType<Prisma.ResourceCreateManyTemplateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ResourceCreateManyTemplateInputSchema),z.lazy(() => ResourceCreateManyTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ResourceCreateManyTemplateInputEnvelopeSchema;
