import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ApiUsageStatCreateManyMerchantInputSchema: z.ZodType<Prisma.ApiUsageStatCreateManyMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  apiKeyId: z.string(),
  date: z.coerce.date(),
  requestCount: z.number().int(),
  successCount: z.number().int(),
  errorCount: z.number().int(),
  rateLimitHits: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export default ApiUsageStatCreateManyMerchantInputSchema;
