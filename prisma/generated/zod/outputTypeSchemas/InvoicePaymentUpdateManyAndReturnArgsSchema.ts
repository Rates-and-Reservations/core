import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoicePaymentUpdateManyMutationInputSchema } from '../inputTypeSchemas/InvoicePaymentUpdateManyMutationInputSchema'
import { InvoicePaymentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InvoicePaymentUncheckedUpdateManyInputSchema'
import { InvoicePaymentWhereInputSchema } from '../inputTypeSchemas/InvoicePaymentWhereInputSchema'

export const InvoicePaymentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.InvoicePaymentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ InvoicePaymentUpdateManyMutationInputSchema,InvoicePaymentUncheckedUpdateManyInputSchema ]),
  where: InvoicePaymentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default InvoicePaymentUpdateManyAndReturnArgsSchema;
