import { z } from 'zod';

export const PricingRuleTypeSchema = z.enum(['TIME_BASED','DEMAND_BASED','SEASONAL','BULK_DISCOUNT','LAST_MINUTE','EARLY_BIRD','LOYALTY']);

export type PricingRuleTypeType = `${z.infer<typeof PricingRuleTypeSchema>}`

export default PricingRuleTypeSchema;
