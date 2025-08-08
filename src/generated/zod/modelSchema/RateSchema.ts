import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { RateDurationTypeSchema } from '../inputTypeSchemas/RateDurationTypeSchema'
import { TaxTypeSchema } from '../inputTypeSchemas/TaxTypeSchema'

/////////////////////////////////////////
// RATE SCHEMA
/////////////////////////////////////////

/**
 * Rate: Represents a pricing rate for a resource
 * @group Pricing
 */
export const RateSchema = z.object({
  durationType: RateDurationTypeSchema,
  taxType: TaxTypeSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  resourceId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.instanceof(Prisma.Decimal, { message: "Field 'price' must be a Decimal. Location: ['Models', 'Rate']"}),
  currency: z.string(),
  isDefault: z.boolean(),
  isPublished: z.boolean(),
  isActive: z.boolean(),
  orderIndex: z.number().int(),
  validFrom: z.coerce.date().nullable(),
  validTo: z.coerce.date().nullable(),
  taxAmount: z.instanceof(Prisma.Decimal, { message: "Field 'taxAmount' must be a Decimal. Location: ['Models', 'Rate']"}),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
})

export type Rate = z.infer<typeof RateSchema>

export default RateSchema;
