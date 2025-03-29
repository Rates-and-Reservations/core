import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentActionsIncludeSchema } from '../inputTypeSchemas/PaymentActionsIncludeSchema'
import { PaymentActionsWhereInputSchema } from '../inputTypeSchemas/PaymentActionsWhereInputSchema'
import { PaymentActionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PaymentActionsOrderByWithRelationInputSchema'
import { PaymentActionsWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentActionsWhereUniqueInputSchema'
import { PaymentActionsScalarFieldEnumSchema } from '../inputTypeSchemas/PaymentActionsScalarFieldEnumSchema'
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { RefundRequestFindManyArgsSchema } from "../outputTypeSchemas/RefundRequestFindManyArgsSchema"
import { RefundLogFindManyArgsSchema } from "../outputTypeSchemas/RefundLogFindManyArgsSchema"
import { InvoicePaymentFindManyArgsSchema } from "../outputTypeSchemas/InvoicePaymentFindManyArgsSchema"
import { PaymentActionsCountOutputTypeArgsSchema } from "../outputTypeSchemas/PaymentActionsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const PaymentActionsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PaymentActionsFindFirstOrThrowArgs> = z.object({
  select: PaymentActionsSelectSchema.optional(),
  include: z.lazy(() => PaymentActionsIncludeSchema).optional(),
  where: PaymentActionsWhereInputSchema.optional(),
  orderBy: z.union([ PaymentActionsOrderByWithRelationInputSchema.array(),PaymentActionsOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentActionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentActionsScalarFieldEnumSchema,PaymentActionsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PaymentActionsFindFirstOrThrowArgsSchema;
