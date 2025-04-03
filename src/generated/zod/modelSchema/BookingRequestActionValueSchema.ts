import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// BOOKING REQUEST ACTION VALUE SCHEMA
/////////////////////////////////////////

/**
 * @group BookingSetup
 */
export const BookingRequestActionValueSchema = z.object({
  id: z.string().cuid(),
  bookingRequestId: z.string(),
  bookingActionId: z.string(),
  value: JsonValueSchema,
  completedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})

export type BookingRequestActionValue = z.infer<typeof BookingRequestActionValueSchema>

export default BookingRequestActionValueSchema;
