import { z } from 'zod';

export const WebhookEventStatusSchema = z.enum(['PENDING','SENT','FAILED','ABANDONED']);

export type WebhookEventStatusType = `${z.infer<typeof WebhookEventStatusSchema>}`

export default WebhookEventStatusSchema;
