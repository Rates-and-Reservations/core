import { z } from 'zod';

export const NotificationTypeSchema = z.enum(['MERCHANT_USER_INVITE','BOOKING_CONFIRMED','BOOKING_CANCELLED','BOOKING_REMINDER','BOOKING_UPDATED','PAYMENT_RECEIPT','REFUND_PROCESSED','REVIEW_REQUEST','WAITLIST_NOTIFICATION']);

export type NotificationTypeType = `${z.infer<typeof NotificationTypeSchema>}`

export default NotificationTypeSchema;
