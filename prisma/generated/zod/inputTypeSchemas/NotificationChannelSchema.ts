import { z } from 'zod';

export const NotificationChannelSchema = z.enum(['EMAIL','SMS']);

export type NotificationChannelType = `${z.infer<typeof NotificationChannelSchema>}`

export default NotificationChannelSchema;
