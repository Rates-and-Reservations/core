import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// API USAGE STAT SCHEMA
/////////////////////////////////////////

/**
 * ApiUsageStat: Represents a daily usage summary for an API key
 * @group Events
 */
export const ApiUsageStatSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  apiKeyId: z.string(),
  date: z.coerce.date(),
  requestCount: z.number().int(),
  successCount: z.number().int(),
  errorCount: z.number().int(),
  rateLimitHits: z.number().int(),
  averageResponseTime: z.instanceof(Prisma.Decimal, { message: "Field 'averageResponseTime' must be a Decimal. Location: ['Models', 'ApiUsageStat']"}).nullable(),
  totalDataTransfer: z.bigint().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})

export type ApiUsageStat = z.infer<typeof ApiUsageStatSchema>

export default ApiUsageStatSchema;
