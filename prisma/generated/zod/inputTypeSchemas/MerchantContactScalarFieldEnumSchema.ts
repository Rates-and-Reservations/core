import { z } from 'zod';

export const MerchantContactScalarFieldEnumSchema = z.enum(['id','merchantId','email','phone','address','city','postcode','isDefault','createdAt','updatedAt']);

export default MerchantContactScalarFieldEnumSchema;
