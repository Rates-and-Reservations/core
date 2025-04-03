import { z } from 'zod';
import { BookingStatusSchema } from '../inputTypeSchemas/BookingStatusSchema'

/////////////////////////////////////////
// BOOKING ITEM TRANSITION SCHEMA
/////////////////////////////////////////

/**
 * @group Booking
 */
export const BookingItemTransitionSchema = z.object({
  status: BookingStatusSchema,
  id: z.string().cuid(),
  bookingItemId: z.string(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingItemTransition = z.infer<typeof BookingItemTransitionSchema>

export default BookingItemTransitionSchema;
