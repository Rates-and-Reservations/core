import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestIncludeSchema } from '../inputTypeSchemas/RefundRequestIncludeSchema'
import { RefundRequestUpdateInputSchema } from '../inputTypeSchemas/RefundRequestUpdateInputSchema'
import { RefundRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/RefundRequestUncheckedUpdateInputSchema'
import { RefundRequestWhereUniqueInputSchema } from '../inputTypeSchemas/RefundRequestWhereUniqueInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { PaymentActionsArgsSchema } from "../outputTypeSchemas/PaymentActionsArgsSchema"
import { RefundLogFindManyArgsSchema } from "../outputTypeSchemas/RefundLogFindManyArgsSchema"
import { RefundRequestCountOutputTypeArgsSchema } from "../outputTypeSchemas/RefundRequestCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RefundRequestSelectSchema: z.ZodType<Prisma.RefundRequestSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  paymentTransactionId: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  reason: z.boolean().optional(),
  status: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
  approvedAt: z.boolean().optional(),
  rejectedAt: z.boolean().optional(),
  requestedBy: z.boolean().optional(),
  requestedAt: z.boolean().optional(),
  processedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  paymentTransaction: z.union([z.boolean(),z.lazy(() => PaymentActionsArgsSchema)]).optional(),
  RefundLog: z.union([z.boolean(),z.lazy(() => RefundLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RefundRequestCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RefundRequestUpdateArgsSchema: z.ZodType<Prisma.RefundRequestUpdateArgs> = z.object({
  select: RefundRequestSelectSchema.optional(),
  include: z.lazy(() => RefundRequestIncludeSchema).optional(),
  data: z.union([ RefundRequestUpdateInputSchema,RefundRequestUncheckedUpdateInputSchema ]),
  where: RefundRequestWhereUniqueInputSchema,
}).strict() ;

export default RefundRequestUpdateArgsSchema;
