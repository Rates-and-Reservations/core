import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundLogIncludeSchema } from '../inputTypeSchemas/RefundLogIncludeSchema'
import { RefundLogWhereInputSchema } from '../inputTypeSchemas/RefundLogWhereInputSchema'
import { RefundLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/RefundLogOrderByWithRelationInputSchema'
import { RefundLogWhereUniqueInputSchema } from '../inputTypeSchemas/RefundLogWhereUniqueInputSchema'
import { RefundLogScalarFieldEnumSchema } from '../inputTypeSchemas/RefundLogScalarFieldEnumSchema'
import { RefundRequestArgsSchema } from "../outputTypeSchemas/RefundRequestArgsSchema"
import { PaymentActionsArgsSchema } from "../outputTypeSchemas/PaymentActionsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const RefundLogFindFirstArgsSchema: z.ZodType<Prisma.RefundLogFindFirstArgs> = z.object({
  select: RefundLogSelectSchema.optional(),
  include: z.lazy(() => RefundLogIncludeSchema).optional(),
  where: RefundLogWhereInputSchema.optional(),
  orderBy: z.union([ RefundLogOrderByWithRelationInputSchema.array(),RefundLogOrderByWithRelationInputSchema ]).optional(),
  cursor: RefundLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RefundLogScalarFieldEnumSchema,RefundLogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RefundLogFindFirstArgsSchema;
