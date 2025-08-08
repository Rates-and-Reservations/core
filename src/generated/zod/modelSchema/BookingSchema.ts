import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { Prisma } from '@prisma/client'
import { BookingStatusSchema } from '../inputTypeSchemas/BookingStatusSchema'

/////////////////////////////////////////
// BOOKING SCHEMA
/////////////////////////////////////////

/**
 * Booking: Represents a confirmed booking made by a customer
 * @group Booking
 */
export const BookingSchema = z.object({
  currentStatus: BookingStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  customerId: z.string().nullable(),
  resourceId: z.string(),
  rateId: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  partySize: z.number().int(),
  basePrice: z.instanceof(Prisma.Decimal, { message: "Field 'basePrice' must be a Decimal. Location: ['Models', 'Booking']"}),
  totalPrice: z.instanceof(Prisma.Decimal, { message: "Field 'totalPrice' must be a Decimal. Location: ['Models', 'Booking']"}),
  taxAmount: z.instanceof(Prisma.Decimal, { message: "Field 'taxAmount' must be a Decimal. Location: ['Models', 'Booking']"}),
  currency: z.string(),
  notes: z.string().nullable(),
  internalNotes: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  bookingRequestId: z.string().nullable(),
})

export type Booking = z.infer<typeof BookingSchema>

export default BookingSchema;
