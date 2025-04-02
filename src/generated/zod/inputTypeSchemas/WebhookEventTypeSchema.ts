import { z } from 'zod';

export const WebhookEventTypeSchema = z.enum(['BOOKING_CREATED','BOOKING_UPDATED','PAYMENT_SUCCESSFUL']);

export type WebhookEventTypeType = `${z.infer<typeof WebhookEventTypeSchema>}`

export default WebhookEventTypeSchema;
