import { z } from 'zod';
import { NotificationTypeSchema } from '../inputTypeSchemas/NotificationTypeSchema'
import { NotificationChannelSchema } from '../inputTypeSchemas/NotificationChannelSchema'

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

/**
 * Notification: Represents a notification message sent to a customer or merchant
 * @group Notification
 */
export const NotificationSchema = z.object({
  type: NotificationTypeSchema,
  channel: NotificationChannelSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  bookingId: z.string().nullable(),
  customerId: z.string().nullable(),
  recipient: z.string(),
  subject: z.string().nullable(),
  message: z.string(),
  errorMessage: z.string().nullable(),
  sentAt: z.coerce.date().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  notificationTemplateId: z.string().nullable(),
})

export type Notification = z.infer<typeof NotificationSchema>

export default NotificationSchema;
