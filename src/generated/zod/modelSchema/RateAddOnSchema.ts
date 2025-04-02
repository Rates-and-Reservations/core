import { z } from 'zod';

/////////////////////////////////////////
// RATE ADD ON SCHEMA
/////////////////////////////////////////

export const RateAddOnSchema = z.object({
  id: z.string().cuid(),
  rateId: z.string(),
  addOnId: z.string(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type RateAddOn = z.infer<typeof RateAddOnSchema>

export default RateAddOnSchema;
