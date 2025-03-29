import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentActionsWhereInputSchema } from '../inputTypeSchemas/PaymentActionsWhereInputSchema'

export const PaymentActionsDeleteManyArgsSchema: z.ZodType<Prisma.PaymentActionsDeleteManyArgs> = z.object({
  where: PaymentActionsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default PaymentActionsDeleteManyArgsSchema;
