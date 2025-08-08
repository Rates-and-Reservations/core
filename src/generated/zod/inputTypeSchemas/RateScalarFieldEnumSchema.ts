import { z } from 'zod';

export const RateScalarFieldEnumSchema = z.enum(['id','merchantId','resourceId','name','description','price','currency','durationType','isDefault','isPublished','isActive','orderIndex','validFrom','validTo','taxType','taxAmount','createdAt','updatedAt','isDeleted','deletedAt']);

export default RateScalarFieldEnumSchema;
