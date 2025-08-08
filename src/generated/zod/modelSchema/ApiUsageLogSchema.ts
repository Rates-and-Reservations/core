import { z } from 'zod';

/////////////////////////////////////////
// API USAGE LOG SCHEMA
/////////////////////////////////////////

/**
 * ApiUsageLog: Represents a log entry for API usage
 * @group Events
 */
export const ApiUsageLogSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  apiKeyId: z.string(),
  endpoint: z.string(),
  method: z.string(),
  statusCode: z.number().int(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  responseTimeMs: z.number().int(),
  rateLimitExceeded: z.boolean(),
  requestSize: z.number().int().nullable(),
  responseSize: z.number().int().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})

export type ApiUsageLog = z.infer<typeof ApiUsageLogSchema>

export default ApiUsageLogSchema;
