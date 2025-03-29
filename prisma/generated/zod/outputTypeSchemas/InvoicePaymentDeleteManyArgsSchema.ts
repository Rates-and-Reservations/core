import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoicePaymentWhereInputSchema } from '../inputTypeSchemas/InvoicePaymentWhereInputSchema'

export const InvoicePaymentDeleteManyArgsSchema: z.ZodType<Prisma.InvoicePaymentDeleteManyArgs> = z.object({
  where: InvoicePaymentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default InvoicePaymentDeleteManyArgsSchema;
