import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentActionsCreateManyInputSchema } from '../inputTypeSchemas/PaymentActionsCreateManyInputSchema'

export const PaymentActionsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PaymentActionsCreateManyAndReturnArgs> = z.object({
  data: z.union([ PaymentActionsCreateManyInputSchema,PaymentActionsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PaymentActionsCreateManyAndReturnArgsSchema;
