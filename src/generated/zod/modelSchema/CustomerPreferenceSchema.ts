import { z } from 'zod';

/////////////////////////////////////////
// CUSTOMER PREFERENCE SCHEMA
/////////////////////////////////////////

/**
 * CustomerPreference: Customer preferences and settings
 * @group Customer
 */
export const CustomerPreferenceSchema = z.object({
  id: z.string().cuid(),
  customerId: z.string(),
  key: z.string(),
  value: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CustomerPreference = z.infer<typeof CustomerPreferenceSchema>

export default CustomerPreferenceSchema;
