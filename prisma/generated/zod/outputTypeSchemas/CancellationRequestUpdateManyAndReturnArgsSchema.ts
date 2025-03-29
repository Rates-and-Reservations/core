import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/CancellationRequestUpdateManyMutationInputSchema'
import { CancellationRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CancellationRequestUncheckedUpdateManyInputSchema'
import { CancellationRequestWhereInputSchema } from '../inputTypeSchemas/CancellationRequestWhereInputSchema'

export const CancellationRequestUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CancellationRequestUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CancellationRequestUpdateManyMutationInputSchema,CancellationRequestUncheckedUpdateManyInputSchema ]),
  where: CancellationRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CancellationRequestUpdateManyAndReturnArgsSchema;
