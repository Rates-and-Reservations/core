import { z } from 'zod';
import { NotificationTypeSchema } from '../inputTypeSchemas/NotificationTypeSchema'
import { NotificationChannelSchema } from '../inputTypeSchemas/NotificationChannelSchema'
import { NotificationStatusSchema } from '../inputTypeSchemas/NotificationStatusSchema'

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  type: NotificationTypeSchema,
  channel: NotificationChannelSchema,
  status: NotificationStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  bookingId: z.string().nullable(),
  customerId: z.string().nullable(),
  notificationTemplateId: z.string().nullable(),
  recipient: z.string(),
  subject: z.string().nullable(),
  message: z.string(),
  errorMessage: z.string().nullable(),
  sentAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Notification = z.infer<typeof NotificationSchema>

export default NotificationSchema;
