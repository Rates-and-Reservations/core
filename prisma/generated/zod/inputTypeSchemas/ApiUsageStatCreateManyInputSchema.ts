import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ApiUsageStatCreateManyInputSchema: z.ZodType<Prisma.ApiUsageStatCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  apiKeyId: z.string(),
  date: z.coerce.date(),
  requestCount: z.number().int(),
  successCount: z.number().int(),
  errorCount: z.number().int(),
  rateLimitHits: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export default ApiUsageStatCreateManyInputSchema;
