import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { DiscountTypeSchema } from '../inputTypeSchemas/DiscountTypeSchema'

/////////////////////////////////////////
// DISCOUNT SCHEMA
/////////////////////////////////////////

export const DiscountSchema = z.object({
  discountType: DiscountTypeSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  code: z.string().nullable(),
  description: z.string().nullable(),
  amount: z.instanceof(Prisma.Decimal, { message: "Field 'amount' must be a Decimal. Location: ['Models', 'Discount']"}),
  usageLimit: z.number().int().nullable(),
  usedCount: z.number().int(),
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
