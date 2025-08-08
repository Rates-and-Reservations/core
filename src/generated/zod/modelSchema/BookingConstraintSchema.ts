import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { ConstraintTypeSchema } from '../inputTypeSchemas/ConstraintTypeSchema'

/////////////////////////////////////////
// BOOKING CONSTRAINT SCHEMA
/////////////////////////////////////////

/**
 * BookingConstraint: Advanced booking rules and constraints
 * @group Availability
 */
export const BookingConstraintSchema = z.object({
  constraintType: ConstraintTypeSchema,
  id: z.string().cuid(),
  resourceId: z.string(),
  value: JsonValueSchema,
  description: z.string().nullable(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingConstraint = z.infer<typeof BookingConstraintSchema>

export default BookingConstraintSchema;
