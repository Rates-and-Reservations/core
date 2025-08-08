import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// SECURITY LOG SCHEMA
/////////////////////////////////////////

/**
 * SecurityLog: Security-related events
 * @group Security
 */
export const SecurityLogSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string().nullable(),
  eventType: z.string(),
  severity: z.string(),
  description: z.string(),
  userId: z.string().nullable(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
})

export type SecurityLog = z.infer<typeof SecurityLogSchema>

export default SecurityLogSchema;
