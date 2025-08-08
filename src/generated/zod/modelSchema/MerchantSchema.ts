import { z } from 'zod';
import { BusinessTypeSchema } from '../inputTypeSchemas/BusinessTypeSchema'

/////////////////////////////////////////
// MERCHANT SCHEMA
/////////////////////////////////////////

/**
 * Merchant: The main entity representing a business or organisation
 * @group Merchant
 */
export const MerchantSchema = z.object({
  businessType: BusinessTypeSchema,
  id: z.string().cuid(),
  name: z.string(),
  ownerId: z.string(),
  country: z.string(),
  tradingName: z.string(),
  vatNumber: z.string().nullable(),
  description: z.string().nullable(),
  logo: z.string().nullable(),
  industry: z.string(),
  category: z.string(),
  timezone: z.string(),
  locale: z.string(),
  currency: z.string(),
  dateFormat: z.string(),
  timeFormat: z.string(),
  isVerified: z.boolean(),
  isActive: z.boolean(),
  verifiedAt: z.coerce.date().nullable(),
  disabledAt: z.coerce.date().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Merchant = z.infer<typeof MerchantSchema>

export default MerchantSchema;
