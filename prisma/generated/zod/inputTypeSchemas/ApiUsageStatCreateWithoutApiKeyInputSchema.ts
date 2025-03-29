import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateNestedOneWithoutApiUsageStatInputSchema } from './MerchantCreateNestedOneWithoutApiUsageStatInputSchema';

export const ApiUsageStatCreateWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageStatCreateWithoutApiKeyInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  requestCount: z.number().int(),
  successCount: z.number().int(),
  errorCount: z.number().int(),
  rateLimitHits: z.number().int(),
  createdAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutApiUsageStatInputSchema)
}).strict();

export default ApiUsageStatCreateWithoutApiKeyInputSchema;
