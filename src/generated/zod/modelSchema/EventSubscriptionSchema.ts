import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// EVENT SUBSCRIPTION SCHEMA
/////////////////////////////////////////

/**
 * EventSubscription: Subscriptions for real-time updates
 * @group Events
 */
export const EventSubscriptionSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  endpoint: z.string(),
  events: JsonValueSchema,
  isActive: z.boolean(),
  lastPingAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type EventSubscription = z.infer<typeof EventSubscriptionSchema>

export default EventSubscriptionSchema;
