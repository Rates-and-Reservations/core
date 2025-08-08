import { z } from 'zod';

/////////////////////////////////////////
// RATE ADD ON SCHEMA
/////////////////////////////////////////

/**
 * RateAddOn: Represents an add-on that can be attached to a rate
 * @group Pricing
 */
export const RateAddOnSchema = z.object({
  id: z.string().cuid(),
  rateId: z.string(),
  addOnId: z.string(),
  isRequired: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type RateAddOn = z.infer<typeof RateAddOnSchema>

export default RateAddOnSchema;
