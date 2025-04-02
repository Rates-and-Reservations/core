import { z } from 'zod';

export const MerchantAssetScalarFieldEnumSchema = z.enum(['id','merchantId','name','type','url','publicId','createdAt','updatedAt']);

export default MerchantAssetScalarFieldEnumSchema;
