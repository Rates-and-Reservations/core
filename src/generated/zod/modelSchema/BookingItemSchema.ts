import { z } from 'zod';
import { BookingItemStatusSchema } from '../inputTypeSchemas/BookingItemStatusSchema'

/////////////////////////////////////////
// BOOKING ITEM SCHEMA
/////////////////////////////////////////

/**
 * @group Booking
 */
export const BookingItemSchema = z.object({
  currentStatus: BookingItemStatusSchema,
  id: z.string().cuid(),
  bookingId: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  bookingRateSnapshotId: z.string(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingItem = z.infer<typeof BookingItemSchema>

export default BookingItemSchema;
