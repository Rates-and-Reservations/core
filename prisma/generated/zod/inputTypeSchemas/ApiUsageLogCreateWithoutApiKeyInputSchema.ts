import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateNestedOneWithoutApiUsageLogInputSchema } from './MerchantCreateNestedOneWithoutApiUsageLogInputSchema';

export const ApiUsageLogCreateWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageLogCreateWithoutApiKeyInput> = z.object({
  id: z.string().cuid().optional(),
  endpoint: z.string(),
  method: z.string(),
  statusCode: z.number().int(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  responseTimeMs: z.number().int(),
  rateLimitExceeded: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutApiUsageLogInputSchema)
}).strict();

export default ApiUsageLogCreateWithoutApiKeyInputSchema;
