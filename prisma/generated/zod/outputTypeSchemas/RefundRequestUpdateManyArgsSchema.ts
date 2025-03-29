import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/RefundRequestUpdateManyMutationInputSchema'
import { RefundRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RefundRequestUncheckedUpdateManyInputSchema'
import { RefundRequestWhereInputSchema } from '../inputTypeSchemas/RefundRequestWhereInputSchema'

export const RefundRequestUpdateManyArgsSchema: z.ZodType<Prisma.RefundRequestUpdateManyArgs> = z.object({
  data: z.union([ RefundRequestUpdateManyMutationInputSchema,RefundRequestUncheckedUpdateManyInputSchema ]),
  where: RefundRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RefundRequestUpdateManyArgsSchema;
