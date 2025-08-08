import { z } from 'zod';

/////////////////////////////////////////
// MERCHANT ASSET SCHEMA
/////////////////////////////////////////

/**
 * MerchantAsset: Represents a file or asset uploaded by the merchant
 * @group Merchant
 */
export const MerchantAssetSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  type: z.string(),
  url: z.string(),
  publicId: z.string(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type MerchantAsset = z.infer<typeof MerchantAssetSchema>

export default MerchantAssetSchema;
