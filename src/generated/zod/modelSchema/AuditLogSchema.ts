import { z } from 'zod';

/////////////////////////////////////////
// AUDIT LOG SCHEMA
/////////////////////////////////////////

/**
 * @group Events
 */
export const AuditLogSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  userId: z.string().nullable(),
  action: z.string(),
  resourceType: z.string(),
  resourceId: z.string().nullable(),
  description: z.string().nullable(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  performedAt: z.coerce.date().nullable(),
  performedBy: z.string().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})

export type AuditLog = z.infer<typeof AuditLogSchema>

export default AuditLogSchema;
