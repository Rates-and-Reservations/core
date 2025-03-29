import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { RefundRequestFindManyArgsSchema } from "../outputTypeSchemas/RefundRequestFindManyArgsSchema"
import { RefundLogFindManyArgsSchema } from "../outputTypeSchemas/RefundLogFindManyArgsSchema"
import { InvoicePaymentFindManyArgsSchema } from "../outputTypeSchemas/InvoicePaymentFindManyArgsSchema"
import { PaymentActionsCountOutputTypeArgsSchema } from "../outputTypeSchemas/PaymentActionsCountOutputTypeArgsSchema"

export const PaymentActionsSelectSchema: z.ZodType<Prisma.PaymentActionsSelect> = z.object({
  id: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerPaymentId: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  status: z.boolean().optional(),
  refundedAmount: z.boolean().optional(),
  paymentMethod: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  RefundRequest: z.union([z.boolean(),z.lazy(() => RefundRequestFindManyArgsSchema)]).optional(),
  RefundLog: z.union([z.boolean(),z.lazy(() => RefundLogFindManyArgsSchema)]).optional(),
  InvoicePayment: z.union([z.boolean(),z.lazy(() => InvoicePaymentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PaymentActionsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PaymentActionsSelectSchema;
