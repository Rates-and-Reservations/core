import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { NotificationTypeSchema } from '../inputTypeSchemas/NotificationTypeSchema'
import { NotificationChannelSchema } from '../inputTypeSchemas/NotificationChannelSchema'

/////////////////////////////////////////
// NOTIFICATION TEMPLATE SCHEMA
/////////////////////////////////////////

/**
 * NotificationTemplate: Represents a template for a notification message
 * @group Notification
 */
export const NotificationTemplateSchema = z.object({
  type: NotificationTypeSchema,
  channel: NotificationChannelSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  subject: z.string(),
  body: z.string(),
  variables: JsonValueSchema.nullable(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type NotificationTemplate = z.infer<typeof NotificationTemplateSchema>

export default NotificationTemplateSchema;
