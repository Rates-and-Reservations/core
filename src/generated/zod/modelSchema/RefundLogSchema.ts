import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { RefundStatusSchema } from '../inputTypeSchemas/RefundStatusSchema'

/////////////////////////////////////////
// REFUND LOG SCHEMA
/////////////////////////////////////////

export const RefundLogSchema = z.object({
  status: RefundStatusSchema,
  id: z.string().cuid(),
  refundRequestId: z.string(),
  paymentTransactionId: z.string(),
  amount: z.instanceof(Prisma.Decimal, { message: "Field 'amount' must be a Decimal. Location: ['Models', 'RefundLog']"}),
  currency: z.string(),
  provider: z.string(),
  providerRefundId: z.string(),
  errorMessage: z.string().nullable(),
  processedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type RefundLog = z.infer<typeof RefundLogSchema>

export default RefundLogSchema;
