import { z } from 'zod';

export const DiscountScalarFieldEnumSchema = z.enum(['id','merchantId','code','description','discountType','amount','usageLimit','usedCount','startDate','endDate','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default DiscountScalarFieldEnumSchema;
