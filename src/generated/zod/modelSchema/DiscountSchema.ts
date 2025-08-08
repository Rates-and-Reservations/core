import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { DiscountTypeSchema } from '../inputTypeSchemas/DiscountTypeSchema'

/////////////////////////////////////////
// DISCOUNT SCHEMA
/////////////////////////////////////////

/**
 * Discount: Represents a discount that can be applied to a rate
 * @group Pricing
 */
export const DiscountSchema = z.object({
  discountType: DiscountTypeSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  code: z.string().nullable(),
  name: z.string(),
  description: z.string().nullable(),
  amount: z.instanceof(Prisma.Decimal, { message: "Field 'amount' must be a Decimal. Location: ['Models', 'Discount']"}),
  usageLimit: z.number().int().nullable(),
  usedCount: z.number().int(),
  firstTimeCustomerOnly: z.boolean(),
  minimumSpend: z.instanceof(Prisma.Decimal, { message: "Field 'minimumSpend' must be a Decimal. Location: ['Models', 'Discount']"}).nullable(),
  startDate: z.coerce.date().nullable(),
  endDate: z.coerce.date().nullable(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Discount = z.infer<typeof DiscountSchema>

export default DiscountSchema;
