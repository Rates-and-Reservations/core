import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ApiUsageLogCreateManyMerchantInputSchema: z.ZodType<Prisma.ApiUsageLogCreateManyMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  apiKeyId: z.string(),
  endpoint: z.string(),
  method: z.string(),
  statusCode: z.number().int(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  responseTimeMs: z.number().int(),
  rateLimitExceeded: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export default ApiUsageLogCreateManyMerchantInputSchema;
