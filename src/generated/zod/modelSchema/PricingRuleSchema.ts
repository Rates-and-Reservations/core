import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { PricingRuleTypeSchema } from '../inputTypeSchemas/PricingRuleTypeSchema'

/////////////////////////////////////////
// PRICING RULE SCHEMA
/////////////////////////////////////////

/**
 * PricingRule: Dynamic pricing rules based on demand, time, etc.
 * @group Pricing
 */
export const PricingRuleSchema = z.object({
  ruleType: PricingRuleTypeSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  conditions: JsonValueSchema,
  adjustment: JsonValueSchema,
  priority: z.number().int(),
  isActive: z.boolean(),
  validFrom: z.coerce.date().nullable(),
  validTo: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type PricingRule = z.infer<typeof PricingRuleSchema>

export default PricingRuleSchema;
