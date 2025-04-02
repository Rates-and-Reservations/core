import { z } from 'zod';

/////////////////////////////////////////
// API USAGE STAT SCHEMA
/////////////////////////////////////////

export const ApiUsageStatSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  apiKeyId: z.string(),
  date: z.coerce.date(),
  requestCount: z.number().int(),
  successCount: z.number().int(),
  errorCount: z.number().int(),
  rateLimitHits: z.number().int(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})

export type ApiUsageStat = z.infer<typeof ApiUsageStatSchema>

export default ApiUsageStatSchema;
