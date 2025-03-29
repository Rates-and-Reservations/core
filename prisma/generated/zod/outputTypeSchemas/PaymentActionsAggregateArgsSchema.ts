import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentActionsWhereInputSchema } from '../inputTypeSchemas/PaymentActionsWhereInputSchema'
import { PaymentActionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PaymentActionsOrderByWithRelationInputSchema'
import { PaymentActionsWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentActionsWhereUniqueInputSchema'

export const PaymentActionsAggregateArgsSchema: z.ZodType<Prisma.PaymentActionsAggregateArgs> = z.object({
  where: PaymentActionsWhereInputSchema.optional(),
  orderBy: z.union([ PaymentActionsOrderByWithRelationInputSchema.array(),PaymentActionsOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentActionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PaymentActionsAggregateArgsSchema;
