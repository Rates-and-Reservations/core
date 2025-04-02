import { z } from 'zod';
import { OrganisationRolesSchema } from '../inputTypeSchemas/OrganisationRolesSchema'

/////////////////////////////////////////
// MERCHANT USER SCHEMA
/////////////////////////////////////////

export const MerchantUserSchema = z.object({
  role: OrganisationRolesSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  userId: z.string(),
  isActive: z.boolean(),
  isVerified: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type MerchantUser = z.infer<typeof MerchantUserSchema>

export default MerchantUserSchema;
