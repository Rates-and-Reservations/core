import { z } from 'zod';

export const MerchantUserScalarFieldEnumSchema = z.enum(['id','merchantId','userId','role','isActive','isVerified','isDeleted','deletedAt','createdAt','updatedAt']);

export default MerchantUserScalarFieldEnumSchema;
