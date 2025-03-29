import { z } from 'zod';

export const MerchantUserScalarFieldEnumSchema = z.enum(['id','merchantId','userId','role','createdAt','updatedAt']);

export default MerchantUserScalarFieldEnumSchema;
