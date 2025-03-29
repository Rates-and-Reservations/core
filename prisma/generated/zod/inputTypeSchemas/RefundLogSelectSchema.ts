import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestArgsSchema } from "../outputTypeSchemas/RefundRequestArgsSchema"
import { PaymentActionsArgsSchema } from "../outputTypeSchemas/PaymentActionsArgsSchema"

export const RefundLogSelectSchema: z.ZodType<Prisma.RefundLogSelect> = z.object({
  id: z.boolean().optional(),
  refundRequestId: z.boolean().optional(),
  paymentTransactionId: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerRefundId: z.boolean().optional(),
  status: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  processedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  refundRequest: z.union([z.boolean(),z.lazy(() => RefundRequestArgsSchema)]).optional(),
  paymentTransaction: z.union([z.boolean(),z.lazy(() => PaymentActionsArgsSchema)]).optional(),
}).strict()

export default RefundLogSelectSchema;
