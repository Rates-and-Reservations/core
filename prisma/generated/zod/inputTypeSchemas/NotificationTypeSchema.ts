import { z } from 'zod';

export const NotificationTypeSchema = z.enum(['BOOKING_CONFIRMED','BOOKING_CANCELLED','BOOKING_REMINDER','PAYMENT_RECEIPT']);

export type NotificationTypeType = `${z.infer<typeof NotificationTypeSchema>}`

export default NotificationTypeSchema;
