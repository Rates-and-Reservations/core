import { z } from 'zod';

export const NotificationStatusSchema = z.enum(['PENDING','SENT','FAILED']);

export type NotificationStatusType = `${z.infer<typeof NotificationStatusSchema>}`

export default NotificationStatusSchema;
