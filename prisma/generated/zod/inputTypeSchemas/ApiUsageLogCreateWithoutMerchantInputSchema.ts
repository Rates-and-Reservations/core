import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyCreateNestedOneWithoutApiUsageLogInputSchema } from './ApiKeyCreateNestedOneWithoutApiUsageLogInputSchema';

export const ApiUsageLogCreateWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageLogCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  endpoint: z.string(),
  method: z.string(),
  statusCode: z.number().int(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  responseTimeMs: z.number().int(),
  rateLimitExceeded: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  apiKey: z.lazy(() => ApiKeyCreateNestedOneWithoutApiUsageLogInputSchema)
}).strict();

export default ApiUsageLogCreateWithoutMerchantInputSchema;
