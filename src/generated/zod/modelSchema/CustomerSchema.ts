import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CUSTOMER SCHEMA
/////////////////////////////////////////

/**
 * Customer: Represents a customer who makes bookings
 * @group Customer
 */
export const CustomerSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  postcode: z.string().nullable(),
  country: z.string().nullable(),
  preferredLanguage: z.string().nullable(),
  preferredTimezone: z.string().nullable(),
  loyaltyPoints: z.number().int(),
  totalBookings: z.number().int(),
  totalSpent: z.instanceof(Prisma.Decimal, { message: "Field 'totalSpent' must be a Decimal. Location: ['Models', 'Customer']"}),
  tags: z.string().array(),
  notes: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Customer = z.infer<typeof CustomerSchema>

export default CustomerSchema;
