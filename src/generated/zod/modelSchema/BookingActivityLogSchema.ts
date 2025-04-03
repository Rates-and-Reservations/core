import { z } from 'zod';
import { BookingActionTypeSchema } from '../inputTypeSchemas/BookingActionTypeSchema'

/////////////////////////////////////////
// BOOKING ACTIVITY LOG SCHEMA
/////////////////////////////////////////

/**
 * @group Events
 */
export const BookingActivityLogSchema = z.object({
  action: BookingActionTypeSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  bookingId: z.string(),
  userId: z.string().nullable(),
  systemAction: z.boolean(),
  previousValue: z.string().nullable(),
  newValue: z.string().nullable(),
  description: z.string().nullable(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  performedAt: z.coerce.date().nullable(),
  performedBy: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type BookingActivityLog = z.infer<typeof BookingActivityLogSchema>

export default BookingActivityLogSchema;
