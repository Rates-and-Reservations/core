import { z } from 'zod';
import { BookingItemStatusSchema } from '../inputTypeSchemas/BookingItemStatusSchema'

/////////////////////////////////////////
// BOOKING ITEM SCHEMA
/////////////////////////////////////////

export const BookingItemSchema = z.object({
  status: BookingItemStatusSchema,
  id: z.string().cuid(),
  bookingId: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  bookingRateSnapshotId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingItem = z.infer<typeof BookingItemSchema>

export default BookingItemSchema;
