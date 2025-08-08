import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { PaymentStatusSchema } from '../inputTypeSchemas/PaymentStatusSchema'

/////////////////////////////////////////
// PAYMENT ACTIONS SCHEMA
/////////////////////////////////////////

/**
 * PaymentActions: Represents a payment transaction for a booking
 * @group Payment
 */
export const PaymentActionsSchema = z.object({
  status: PaymentStatusSchema,
  id: z.string().cuid(),
  bookingId: z.string(),
  merchantId: z.string(),
  provider: z.string(),
  providerPaymentId: z.string(),
  amount: z.instanceof(Prisma.Decimal, { message: "Field 'amount' must be a Decimal. Location: ['Models', 'PaymentActions']"}),
  currency: z.string(),
  refundedAmount: z.instanceof(Prisma.Decimal, { message: "Field 'refundedAmount' must be a Decimal. Location: ['Models', 'PaymentActions']"}),
  paymentMethod: z.string().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type PaymentActions = z.infer<typeof PaymentActionsSchema>

export default PaymentActionsSchema;
