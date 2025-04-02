import { z } from 'zod';

export const MerchantScalarFieldEnumSchema = z.enum(['id','name','ownerId','country','businessType','tradingName','vatNumber','description','logo','industry','category','isVerified','isActive','verifiedAt','disabledAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default MerchantScalarFieldEnumSchema;
