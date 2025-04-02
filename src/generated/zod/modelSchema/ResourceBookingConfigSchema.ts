import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// RESOURCE BOOKING CONFIG SCHEMA
/////////////////////////////////////////

export const ResourceBookingConfigSchema = z.object({
  id: z.string().cuid(),
  resourceId: z.string(),
  minDuration: z.number().int(),
  maxDuration: z.number().int(),
  bufferTime: z.number().int(),
  availableDays: JsonValueSchema.nullable(),
  blackoutDates: JsonValueSchema.nullable(),
  allowMultipleBookings: z.boolean(),
  enableWaitlist: z.boolean(),
  cancellationPolicyId: z.string().nullable(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ResourceBookingConfig = z.infer<typeof ResourceBookingConfigSchema>

export default ResourceBookingConfigSchema;
