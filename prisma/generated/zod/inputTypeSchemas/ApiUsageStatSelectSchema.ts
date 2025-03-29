import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ApiKeyArgsSchema } from "../outputTypeSchemas/ApiKeyArgsSchema"

export const ApiUsageStatSelectSchema: z.ZodType<Prisma.ApiUsageStatSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  apiKeyId: z.boolean().optional(),
  date: z.boolean().optional(),
  requestCount: z.boolean().optional(),
  successCount: z.boolean().optional(),
  errorCount: z.boolean().optional(),
  rateLimitHits: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  apiKey: z.union([z.boolean(),z.lazy(() => ApiKeyArgsSchema)]).optional(),
}).strict()

export default ApiUsageStatSelectSchema;
