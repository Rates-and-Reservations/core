import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyCreateNestedOneWithoutApiUsageStatInputSchema } from './ApiKeyCreateNestedOneWithoutApiUsageStatInputSchema';

export const ApiUsageStatCreateWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageStatCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  requestCount: z.number().int(),
  successCount: z.number().int(),
  errorCount: z.number().int(),
  rateLimitHits: z.number().int(),
  createdAt: z.coerce.date().optional(),
  apiKey: z.lazy(() => ApiKeyCreateNestedOneWithoutApiUsageStatInputSchema)
}).strict();

export default ApiUsageStatCreateWithoutMerchantInputSchema;
