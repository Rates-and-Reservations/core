import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoicePaymentCreateManyInputSchema } from '../inputTypeSchemas/InvoicePaymentCreateManyInputSchema'

export const InvoicePaymentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.InvoicePaymentCreateManyAndReturnArgs> = z.object({
  data: z.union([ InvoicePaymentCreateManyInputSchema,InvoicePaymentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default InvoicePaymentCreateManyAndReturnArgsSchema;
