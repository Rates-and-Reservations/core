import { z } from 'zod';

export const WebhookEventTypeSchema = z.enum(['BOOKING_CREATED','BOOKING_UPDATED','BOOKING_CANCELLED','BOOKING_COMPLETED','PAYMENT_SUCCESSFUL','PAYMENT_FAILED','REFUND_PROCESSED','CUSTOMER_CREATED','RESOURCE_UPDATED','AVAILABILITY_CHANGED','WAITLIST_PROMOTED']);

export type WebhookEventTypeType = `${z.infer<typeof WebhookEventTypeSchema>}`

export default WebhookEventTypeSchema;
