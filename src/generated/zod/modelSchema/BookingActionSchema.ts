import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { ActionTypeSchema } from '../inputTypeSchemas/ActionTypeSchema'

/////////////////////////////////////////
// BOOKING ACTION SCHEMA
/////////////////////////////////////////

/**
 * BookingAction: Represents a step or action in a booking flow
 * @group BookingConfiguration
 */
export const BookingActionSchema = z.object({
  type: ActionTypeSchema,
  id: z.string().cuid(),
  bookingTemplateId: z.string(),
  name: z.string(),
  config: JsonValueSchema,
  required: z.boolean(),
  order: z.number().int(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingAction = z.infer<typeof BookingActionSchema>

export default BookingActionSchema;
