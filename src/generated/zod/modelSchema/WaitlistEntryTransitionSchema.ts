import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { BookingItemStatusSchema } from '../inputTypeSchemas/BookingItemStatusSchema'

/////////////////////////////////////////
// WAITLIST ENTRY TRANSITION SCHEMA
/////////////////////////////////////////

export const WaitlistEntryTransitionSchema = z.object({
  fromStatus: BookingItemStatusSchema,
  toStatus: BookingItemStatusSchema,
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
