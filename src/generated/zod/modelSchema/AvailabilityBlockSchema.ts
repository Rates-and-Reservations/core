import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { BlockTypeSchema } from '../inputTypeSchemas/BlockTypeSchema'

/////////////////////////////////////////
// AVAILABILITY BLOCK SCHEMA
/////////////////////////////////////////

/**
 * AvailabilityBlock: Blocks of time when a resource is unavailable
 * @group Availability
 */
export const AvailabilityBlockSchema = z.object({
  blockType: BlockTypeSchema,
  id: z.string().cuid(),
  resourceId: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  reason: z.string().nullable(),
  isRecurring: z.boolean(),
  recurrenceRule: JsonValueSchema.nullable(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type AvailabilityBlock = z.infer<typeof AvailabilityBlockSchema>

export default AvailabilityBlockSchema;
