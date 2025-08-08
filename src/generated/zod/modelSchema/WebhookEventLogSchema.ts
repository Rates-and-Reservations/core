import { z } from 'zod';

/////////////////////////////////////////
// WEBHOOK EVENT LOG SCHEMA
/////////////////////////////////////////

/**
 * WebhookEventLog: Represents the actual log of webhook events sent
 * @group Developers
 */
export const WebhookEventLogSchema = z.object({
  id: z.string().cuid(),
  eventId: z.string(),
  attemptNumber: z.number().int(),
  responseCode: z.number().int(),
  responseBody: z.string().nullable(),
  errorMessage: z.string().nullable(),
  responseTime: z.number().int().nullable(),
  sentAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type WebhookEventLog = z.infer<typeof WebhookEventLogSchema>

export default WebhookEventLogSchema;
