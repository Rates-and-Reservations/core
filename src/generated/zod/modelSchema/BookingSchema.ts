import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { BookingStatusSchema } from '../inputTypeSchemas/BookingStatusSchema'

/////////////////////////////////////////
// BOOKING SCHEMA
/////////////////////////////////////////

/**
 * @group Booking
 */
export const BookingSchema = z.object({
  currentStatus: BookingStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  customerId: z.string().nullable(),
  bookingRequestId: z.string().nullable(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  notes: z.string().nullable(),
  internalNotes: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Booking = z.infer<typeof BookingSchema>

export default BookingSchema;
