import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// SYSTEM EVENT SCHEMA
/////////////////////////////////////////

/**
 * SystemEvent: System-wide events for real-time processing
 * @group Events
 */
export const SystemEventSchema = z.object({
  id: z.string().cuid(),
  eventType: z.string(),
  entityId: z.string(),
  entityType: z.string(),
  payload: JsonValueSchema,
  processed: z.boolean(),
  processedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})

export type SystemEvent = z.infer<typeof SystemEventSchema>

export default SystemEventSchema;
