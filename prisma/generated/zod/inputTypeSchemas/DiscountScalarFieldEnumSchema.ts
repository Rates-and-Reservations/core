import { z } from 'zod';

export const DiscountScalarFieldEnumSchema = z.enum(['id','merchantId','code','description','discountType','amount','usageLimit','usedCount','startDate','endDate','isActive','createdAt','updatedAt']);

export default DiscountScalarFieldEnumSchema;
