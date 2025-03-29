import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/RefundLogUpdateManyMutationInputSchema'
import { RefundLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RefundLogUncheckedUpdateManyInputSchema'
import { RefundLogWhereInputSchema } from '../inputTypeSchemas/RefundLogWhereInputSchema'

export const RefundLogUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RefundLogUpdateManyAndReturnArgs> = z.object({
  data: z.union([ RefundLogUpdateManyMutationInputSchema,RefundLogUncheckedUpdateManyInputSchema ]),
  where: RefundLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RefundLogUpdateManyAndReturnArgsSchema;
