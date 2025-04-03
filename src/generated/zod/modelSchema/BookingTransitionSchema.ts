import { z } from 'zod';
import { BookingStatusSchema } from '../inputTypeSchemas/BookingStatusSchema'

/////////////////////////////////////////
// BOOKING TRANSITION SCHEMA
/////////////////////////////////////////

/**
 * @group Booking
 */
export const BookingTransitionSchema = z.object({
  status: BookingStatusSchema,
  id: z.string().cuid(),
  bookingId: z.string(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingTransition = z.infer<typeof BookingTransitionSchema>

export default BookingTransitionSchema;
