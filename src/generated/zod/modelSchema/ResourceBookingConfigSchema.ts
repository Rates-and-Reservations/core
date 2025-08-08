import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// RESOURCE BOOKING CONFIG SCHEMA
/////////////////////////////////////////

/**
 * ResourceBookingConfig: Represents the booking configuration for a resource
 * @group Inventory
 */
export const ResourceBookingConfigSchema = z.object({
  id: z.string().cuid(),
  resourceId: z.string(),
  availableDays: JsonValueSchema.nullable(),
  blackoutDates: JsonValueSchema.nullable(),
  allowMultipleBookings: z.boolean(),
  enableWaitlist: z.boolean(),
  autoConfirm: z.boolean(),
  cancellationPolicyId: z.string().nullable(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ResourceBookingConfig = z.infer<typeof ResourceBookingConfigSchema>

export default ResourceBookingConfigSchema;
