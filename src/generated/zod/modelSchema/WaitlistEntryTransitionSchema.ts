import { z } from 'zod';
import { WaitlistStatusSchema } from '../inputTypeSchemas/WaitlistStatusSchema'

/////////////////////////////////////////
// WAITLIST ENTRY TRANSITION SCHEMA
/////////////////////////////////////////

export const WaitlistEntryTransitionSchema = z.object({
  status: WaitlistStatusSchema,
  id: z.string().cuid(),
  waitlistEntryId: z.string(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type WaitlistEntryTransition = z.infer<typeof WaitlistEntryTransitionSchema>

export default WaitlistEntryTransitionSchema;
