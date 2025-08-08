import { z } from 'zod';
import { NotificationStatusSchema } from '../inputTypeSchemas/NotificationStatusSchema'

/////////////////////////////////////////
// NOTIFICATION LOG SCHEMA
/////////////////////////////////////////

/**
 * NotificationLog: Represents a log entry for a notification message
 * @group Notification
 */
export const NotificationLogSchema = z.object({
  status: NotificationStatusSchema,
  id: z.string().cuid(),
  notificationId: z.string(),
  errorMessage: z.string().nullable(),
  deliveredAt: z.coerce.date().nullable(),
  openedAt: z.coerce.date().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type NotificationLog = z.infer<typeof NotificationLogSchema>

export default NotificationLogSchema;
