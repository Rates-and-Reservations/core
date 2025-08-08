import { z } from 'zod';
import { OrganisationRolesSchema } from '../inputTypeSchemas/OrganisationRolesSchema'

/////////////////////////////////////////
// MERCHANT USER SCHEMA
/////////////////////////////////////////

/**
 * MerchantUser: Represents a user within the merchant's organisation
 * @group Merchant
 */
export const MerchantUserSchema = z.object({
  role: OrganisationRolesSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  userId: z.string(),
  isActive: z.boolean(),
  isVerified: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type MerchantUser = z.infer<typeof MerchantUserSchema>

export default MerchantUserSchema;
