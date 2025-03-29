import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoicePaymentWhereInputSchema } from '../inputTypeSchemas/InvoicePaymentWhereInputSchema'
import { InvoicePaymentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InvoicePaymentOrderByWithAggregationInputSchema'
import { InvoicePaymentScalarFieldEnumSchema } from '../inputTypeSchemas/InvoicePaymentScalarFieldEnumSchema'
import { InvoicePaymentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InvoicePaymentScalarWhereWithAggregatesInputSchema'

export const InvoicePaymentGroupByArgsSchema: z.ZodType<Prisma.InvoicePaymentGroupByArgs> = z.object({
  where: InvoicePaymentWhereInputSchema.optional(),
  orderBy: z.union([ InvoicePaymentOrderByWithAggregationInputSchema.array(),InvoicePaymentOrderByWithAggregationInputSchema ]).optional(),
  by: InvoicePaymentScalarFieldEnumSchema.array(),
  having: InvoicePaymentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InvoicePaymentGroupByArgsSchema;
