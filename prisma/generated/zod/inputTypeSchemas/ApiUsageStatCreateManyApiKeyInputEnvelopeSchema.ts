import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatCreateManyApiKeyInputSchema } from './ApiUsageStatCreateManyApiKeyInputSchema';

export const ApiUsageStatCreateManyApiKeyInputEnvelopeSchema: z.ZodType<Prisma.ApiUsageStatCreateManyApiKeyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ApiUsageStatCreateManyApiKeyInputSchema),z.lazy(() => ApiUsageStatCreateManyApiKeyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ApiUsageStatCreateManyApiKeyInputEnvelopeSchema;
