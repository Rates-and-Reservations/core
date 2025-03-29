import { z } from 'zod';
import { WaitlistStatusSchema } from '../inputTypeSchemas/WaitlistStatusSchema'

/////////////////////////////////////////
// WAITLIST ENTRY SCHEMA
/////////////////////////////////////////

export const WaitlistEntrySchema = z.object({
  status: WaitlistStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  resourceId: z.string(),
  customerId: z.string().nullable(),
  desiredStartTime: z.coerce.date().nullable(),
  desiredEndTime: z.coerce.date().nullable(),
  notes: z.string().nullable(),
  priority: z.number().int(),
  notifiedAt: z.coerce.date().nullable(),
  promotedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type WaitlistEntry = z.infer<typeof WaitlistEntrySchema>

export default WaitlistEntrySchema;
