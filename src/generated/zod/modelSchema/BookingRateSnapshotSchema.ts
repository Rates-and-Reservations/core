import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { RateDurationTypeSchema } from '../inputTypeSchemas/RateDurationTypeSchema'
import { TaxTypeSchema } from '../inputTypeSchemas/TaxTypeSchema'

/////////////////////////////////////////
// BOOKING RATE SNAPSHOT SCHEMA
/////////////////////////////////////////

/**
 * BookingRateSnapshot: Represents a snapshot of a rate at booking time
 * @group Booking
 */
export const BookingRateSnapshotSchema = z.object({
  durationType: RateDurationTypeSchema,
  taxType: TaxTypeSchema,
  id: z.string().cuid(),
  rateId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.instanceof(Prisma.Decimal, { message: "Field 'price' must be a Decimal. Location: ['Models', 'BookingRateSnapshot']"}),
  currency: z.string(),
  isDefault: z.boolean(),
  isActive: z.boolean(),
  validFrom: z.coerce.date().nullable(),
  validTo: z.coerce.date().nullable(),
  taxAmount: z.instanceof(Prisma.Decimal, { message: "Field 'taxAmount' must be a Decimal. Location: ['Models', 'BookingRateSnapshot']"}),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingRateSnapshot = z.infer<typeof BookingRateSnapshotSchema>

export default BookingRateSnapshotSchema;
