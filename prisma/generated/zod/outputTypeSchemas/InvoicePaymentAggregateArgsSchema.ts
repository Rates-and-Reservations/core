import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoicePaymentWhereInputSchema } from '../inputTypeSchemas/InvoicePaymentWhereInputSchema'
import { InvoicePaymentOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvoicePaymentOrderByWithRelationInputSchema'
import { InvoicePaymentWhereUniqueInputSchema } from '../inputTypeSchemas/InvoicePaymentWhereUniqueInputSchema'

export const InvoicePaymentAggregateArgsSchema: z.ZodType<Prisma.InvoicePaymentAggregateArgs> = z.object({
  where: InvoicePaymentWhereInputSchema.optional(),
  orderBy: z.union([ InvoicePaymentOrderByWithRelationInputSchema.array(),InvoicePaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: InvoicePaymentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InvoicePaymentAggregateArgsSchema;
