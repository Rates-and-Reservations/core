import { z } from 'zod';
import { NotificationStatusSchema } from '../inputTypeSchemas/NotificationStatusSchema'

/////////////////////////////////////////
// NOTIFICATION LOG SCHEMA
/////////////////////////////////////////

/**
 * @group Notification
 */
export const NotificationLogSchema = z.object({
  status: NotificationStatusSchema,
  id: z.string().cuid(),
  notificationId: z.string(),
  errorMessage: z.string().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type NotificationLog = z.infer<typeof NotificationLogSchema>

export default NotificationLogSchema;
