import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { WaitlistStatusSchema } from '../inputTypeSchemas/WaitlistStatusSchema'

/////////////////////////////////////////
// WAITLIST ENTRY TRANSITION SCHEMA
/////////////////////////////////////////

/**
 * WaitlistEntryTransition: Represents a change in the status of a waitlist entry
 * @group Waitlist
 */
export const WaitlistEntryTransitionSchema = z.object({
  fromStatus: WaitlistStatusSchema,
  toStatus: WaitlistStatusSchema,
  id: z.string().cuid(),
  waitlistEntryId: z.string(),
  reason: z.string().nullable(),
  notes: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type WaitlistEntryTransition = z.infer<typeof WaitlistEntryTransitionSchema>

export default WaitlistEntryTransitionSchema;
