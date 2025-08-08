import { z } from 'zod';

export const DiscountScalarFieldEnumSchema = z.enum(['id','merchantId','code','name','description','discountType','amount','usageLimit','usedCount','firstTimeCustomerOnly','minimumSpend','startDate','endDate','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default DiscountScalarFieldEnumSchema;
