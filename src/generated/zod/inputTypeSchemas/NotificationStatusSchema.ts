import { z } from 'zod';

export const NotificationStatusSchema = z.enum(['PENDING','SENT','FAILED','DELIVERED','OPENED']);

export type NotificationStatusType = `${z.infer<typeof NotificationStatusSchema>}`

export default NotificationStatusSchema;
