import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { RefundRequestStatusSchema } from '../inputTypeSchemas/RefundRequestStatusSchema'

/////////////////////////////////////////
// REFUND REQUEST SCHEMA
/////////////////////////////////////////

export const RefundRequestSchema = z.object({
  status: RefundRequestStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  bookingId: z.string(),
  paymentTransactionId: z.string(),
  amount: z.instanceof(Prisma.Decimal, { message: "Field 'amount' must be a Decimal. Location: ['Models', 'RefundRequest']"}),
  currency: z.string(),
  reason: z.string().nullable(),
  approvedBy: z.string().nullable(),
  approvedAt: z.coerce.date().nullable(),
  rejectedAt: z.coerce.date().nullable(),
  requestedBy: z.string().nullable(),
  requestedAt: z.coerce.date(),
  processedAt: z.coerce.date().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type RefundRequest = z.infer<typeof RefundRequestSchema>

export default RefundRequestSchema;
