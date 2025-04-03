import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { BookingItemStatusSchema } from '../inputTypeSchemas/BookingItemStatusSchema'

/////////////////////////////////////////
// BOOKING ITEM TRANSITION SCHEMA
/////////////////////////////////////////

/**
 * @group Booking
 */
export const BookingItemTransitionSchema = z.object({
  fromStatus: BookingItemStatusSchema,
  toStatus: BookingItemStatusSchema,
  id: z.string().cuid(),
  bookingItemId: z.string(),
  reason: z.string().nullable(),
  notes: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingItemTransition = z.infer<typeof BookingItemTransitionSchema>

export default BookingItemTransitionSchema;
