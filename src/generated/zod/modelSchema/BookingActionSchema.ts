import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { ActionTypeSchema } from '../inputTypeSchemas/ActionTypeSchema'

/////////////////////////////////////////
// BOOKING ACTION SCHEMA
/////////////////////////////////////////

/**
 * @group BookingConfiguration
 */
export const BookingActionSchema = z.object({
  type: ActionTypeSchema,
  id: z.string().cuid(),
  bookingTemplateId: z.string(),
  name: z.string(),
  config: JsonValueSchema,
  required: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingAction = z.infer<typeof BookingActionSchema>

export default BookingActionSchema;
