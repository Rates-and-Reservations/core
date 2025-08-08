import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// BOOKING ITEM ADD ON SCHEMA
/////////////////////////////////////////

/**
 * BookingItemAddOn: Represents an add-on attached to a booking item
 * @group Booking
 */
export const BookingItemAddOnSchema = z.object({
  id: z.string().cuid(),
  bookingItemId: z.string(),
  addOnId: z.string(),
  addOnName: z.string(),
  unitPrice: z.instanceof(Prisma.Decimal, { message: "Field 'unitPrice' must be a Decimal. Location: ['Models', 'BookingItemAddOn']"}),
  quantity: z.number().int(),
  totalPrice: z.instanceof(Prisma.Decimal, { message: "Field 'totalPrice' must be a Decimal. Location: ['Models', 'BookingItemAddOn']"}),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingItemAddOn = z.infer<typeof BookingItemAddOnSchema>

export default BookingItemAddOnSchema;
