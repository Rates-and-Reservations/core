import { z } from 'zod';

/////////////////////////////////////////
// MERCHANT ASSET SCHEMA
/////////////////////////////////////////

export const MerchantAssetSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  type: z.string(),
  url: z.string(),
  publicId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type MerchantAsset = z.infer<typeof MerchantAssetSchema>

export default MerchantAssetSchema;
