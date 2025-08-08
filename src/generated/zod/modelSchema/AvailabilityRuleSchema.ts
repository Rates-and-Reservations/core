import { z } from 'zod';

/////////////////////////////////////////
// AVAILABILITY RULE SCHEMA
/////////////////////////////////////////

/**
 * AvailabilityRule: Defines when a resource is available (e.g., business hours)
 * @group Availability
 */
export const AvailabilityRuleSchema = z.object({
  id: z.string().cuid(),
  resourceId: z.string(),
  dayOfWeek: z.number().int(),
  startTime: z.string(),
  endTime: z.string(),
  validFrom: z.coerce.date().nullable(),
  validTo: z.coerce.date().nullable(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type AvailabilityRule = z.infer<typeof AvailabilityRuleSchema>

export default AvailabilityRuleSchema;
