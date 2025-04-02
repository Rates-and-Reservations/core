import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// BOOKING ADD ON SCHEMA
/////////////////////////////////////////

export const BookingAddOnSchema = z.object({
  id: z.string().cuid(),
  bookingId: z.string(),
  addOnId: z.string().nullable(),
  addOnName: z.string(),
  quantity: z.number().int(),
  unitPrice: z.instanceof(Prisma.Decimal, { message: "Field 'unitPrice' must be a Decimal. Location: ['Models', 'BookingAddOn']"}),
  totalPrice: z.instanceof(Prisma.Decimal, { message: "Field 'totalPrice' must be a Decimal. Location: ['Models', 'BookingAddOn']"}),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingAddOn = z.infer<typeof BookingAddOnSchema>

export default BookingAddOnSchema;
