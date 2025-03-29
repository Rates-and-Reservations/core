import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationPolicyUpdateManyMutationInputSchema } from '../inputTypeSchemas/CancellationPolicyUpdateManyMutationInputSchema'
import { CancellationPolicyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CancellationPolicyUncheckedUpdateManyInputSchema'
import { CancellationPolicyWhereInputSchema } from '../inputTypeSchemas/CancellationPolicyWhereInputSchema'

export const CancellationPolicyUpdateManyArgsSchema: z.ZodType<Prisma.CancellationPolicyUpdateManyArgs> = z.object({
  data: z.union([ CancellationPolicyUpdateManyMutationInputSchema,CancellationPolicyUncheckedUpdateManyInputSchema ]),
  where: CancellationPolicyWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CancellationPolicyUpdateManyArgsSchema;
