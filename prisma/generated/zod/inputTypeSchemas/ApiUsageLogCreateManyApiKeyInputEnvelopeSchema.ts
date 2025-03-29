import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogCreateManyApiKeyInputSchema } from './ApiUsageLogCreateManyApiKeyInputSchema';

export const ApiUsageLogCreateManyApiKeyInputEnvelopeSchema: z.ZodType<Prisma.ApiUsageLogCreateManyApiKeyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ApiUsageLogCreateManyApiKeyInputSchema),z.lazy(() => ApiUsageLogCreateManyApiKeyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ApiUsageLogCreateManyApiKeyInputEnvelopeSchema;
