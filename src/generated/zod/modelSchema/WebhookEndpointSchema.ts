import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// WEBHOOK ENDPOINT SCHEMA
/////////////////////////////////////////

/**
 * WebhookEndpoint: Represents a webhook URL for event notifications
 * @group Developers
 */
export const WebhookEndpointSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  url: z.string(),
  secret: z.string(),
  events: JsonValueSchema,
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type WebhookEndpoint = z.infer<typeof WebhookEndpointSchema>

export default WebhookEndpointSchema;
