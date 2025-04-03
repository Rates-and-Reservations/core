import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { BookingStatusSchema } from '../inputTypeSchemas/BookingStatusSchema'

/////////////////////////////////////////
// BOOKING TRANSITION SCHEMA
/////////////////////////////////////////

/**
 * @group Booking
 */
export const BookingTransitionSchema = z.object({
  fromStatus: BookingStatusSchema,
  toStatus: BookingStatusSchema,
  id: z.string().cuid(),
  bookingId: z.string(),
  reason: z.string().nullable(),
  notes: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingTransition = z.infer<typeof BookingTransitionSchema>

export default BookingTransitionSchema;
