import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateNestedOneWithoutApiUsageStatInputSchema } from './MerchantCreateNestedOneWithoutApiUsageStatInputSchema';
import { ApiKeyCreateNestedOneWithoutApiUsageStatInputSchema } from './ApiKeyCreateNestedOneWithoutApiUsageStatInputSchema';

export const ApiUsageStatCreateInputSchema: z.ZodType<Prisma.ApiUsageStatCreateInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  requestCount: z.number().int(),
  successCount: z.number().int(),
  errorCount: z.number().int(),
  rateLimitHits: z.number().int(),
  createdAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutApiUsageStatInputSchema),
  apiKey: z.lazy(() => ApiKeyCreateNestedOneWithoutApiUsageStatInputSchema)
}).strict();

export default ApiUsageStatCreateInputSchema;
