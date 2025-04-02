import { z } from 'zod';

export const WebhookEventStatusSchema = z.enum(['PENDING','SENT','FAILED']);

export type WebhookEventStatusType = `${z.infer<typeof WebhookEventStatusSchema>}`

export default WebhookEventStatusSchema;
