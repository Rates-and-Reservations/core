import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentActionsWhereInputSchema } from '../inputTypeSchemas/PaymentActionsWhereInputSchema'
import { PaymentActionsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PaymentActionsOrderByWithAggregationInputSchema'
import { PaymentActionsScalarFieldEnumSchema } from '../inputTypeSchemas/PaymentActionsScalarFieldEnumSchema'
import { PaymentActionsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PaymentActionsScalarWhereWithAggregatesInputSchema'

export const PaymentActionsGroupByArgsSchema: z.ZodType<Prisma.PaymentActionsGroupByArgs> = z.object({
  where: PaymentActionsWhereInputSchema.optional(),
  orderBy: z.union([ PaymentActionsOrderByWithAggregationInputSchema.array(),PaymentActionsOrderByWithAggregationInputSchema ]).optional(),
  by: PaymentActionsScalarFieldEnumSchema.array(),
  having: PaymentActionsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PaymentActionsGroupByArgsSchema;
