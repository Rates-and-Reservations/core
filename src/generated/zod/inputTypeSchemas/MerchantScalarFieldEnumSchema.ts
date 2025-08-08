import { z } from 'zod';

export const MerchantScalarFieldEnumSchema = z.enum(['id','name','ownerId','country','businessType','tradingName','vatNumber','description','logo','industry','category','timezone','locale','currency','dateFormat','timeFormat','isVerified','isActive','verifiedAt','disabledAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default MerchantScalarFieldEnumSchema;
