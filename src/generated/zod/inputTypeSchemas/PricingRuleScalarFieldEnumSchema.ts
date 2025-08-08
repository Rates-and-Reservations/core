import { z } from 'zod';

export const PricingRuleScalarFieldEnumSchema = z.enum(['id','merchantId','name','description','ruleType','conditions','adjustment','priority','isActive','validFrom','validTo','createdAt','updatedAt']);

export default PricingRuleScalarFieldEnumSchema;
