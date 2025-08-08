import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { SelectionModeSchema } from '../inputTypeSchemas/SelectionModeSchema'

/////////////////////////////////////////
// BOOKING TEMPLATE SCHEMA
/////////////////////////////////////////

/**
 * BookingTemplate: Represents a template for a booking flow
 * @group BookingConfiguration
 */
export const BookingTemplateSchema = z.object({
  selectionMode: SelectionModeSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  config: JsonValueSchema,
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingTemplate = z.infer<typeof BookingTemplateSchema>

export default BookingTemplateSchema;
