import { z } from 'zod';

/////////////////////////////////////////
// MERCHANT CONTACT SCHEMA
/////////////////////////////////////////

/**
 * MerchantContact: Contact details for the merchant
 * @group Merchant
 */
export const MerchantContactSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  postcode: z.string(),
  isDefault: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type MerchantContact = z.infer<typeof MerchantContactSchema>

export default MerchantContactSchema;
