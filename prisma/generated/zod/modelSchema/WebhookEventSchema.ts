import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { WebhookEventTypeSchema } from '../inputTypeSchemas/WebhookEventTypeSchema'
import { WebhookEventStatusSchema } from '../inputTypeSchemas/WebhookEventStatusSchema'

/////////////////////////////////////////
// WEBHOOK EVENT SCHEMA
/////////////////////////////////////////

export const WebhookEventSchema = z.object({
  eventType: WebhookEventTypeSchema,
  status: WebhookEventStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  endpointId: z.string(),
  payload: JsonValueSchema,
  responseCode: z.number().int().nullable(),
  responseBody: z.string().nullable(),
  errorMessage: z.string().nullable(),
  retryCount: z.number().int(),
  nextRetryAt: z.coerce.date().nullable(),
  sentAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type WebhookEvent = z.infer<typeof WebhookEventSchema>

export default WebhookEventSchema;
