import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentActionsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PaymentActionsUpdateManyMutationInputSchema'
import { PaymentActionsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PaymentActionsUncheckedUpdateManyInputSchema'
import { PaymentActionsWhereInputSchema } from '../inputTypeSchemas/PaymentActionsWhereInputSchema'

export const PaymentActionsUpdateManyArgsSchema: z.ZodType<Prisma.PaymentActionsUpdateManyArgs> = z.object({
  data: z.union([ PaymentActionsUpdateManyMutationInputSchema,PaymentActionsUncheckedUpdateManyInputSchema ]),
  where: PaymentActionsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default PaymentActionsUpdateManyArgsSchema;
