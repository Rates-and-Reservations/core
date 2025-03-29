import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationPolicyWhereInputSchema } from '../inputTypeSchemas/CancellationPolicyWhereInputSchema'
import { CancellationPolicyOrderByWithRelationInputSchema } from '../inputTypeSchemas/CancellationPolicyOrderByWithRelationInputSchema'
import { CancellationPolicyWhereUniqueInputSchema } from '../inputTypeSchemas/CancellationPolicyWhereUniqueInputSchema'

export const CancellationPolicyAggregateArgsSchema: z.ZodType<Prisma.CancellationPolicyAggregateArgs> = z.object({
  where: CancellationPolicyWhereInputSchema.optional(),
  orderBy: z.union([ CancellationPolicyOrderByWithRelationInputSchema.array(),CancellationPolicyOrderByWithRelationInputSchema ]).optional(),
  cursor: CancellationPolicyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CancellationPolicyAggregateArgsSchema;
