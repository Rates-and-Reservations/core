import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationPolicyWhereInputSchema } from '../inputTypeSchemas/CancellationPolicyWhereInputSchema'
import { CancellationPolicyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CancellationPolicyOrderByWithAggregationInputSchema'
import { CancellationPolicyScalarFieldEnumSchema } from '../inputTypeSchemas/CancellationPolicyScalarFieldEnumSchema'
import { CancellationPolicyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CancellationPolicyScalarWhereWithAggregatesInputSchema'

export const CancellationPolicyGroupByArgsSchema: z.ZodType<Prisma.CancellationPolicyGroupByArgs> = z.object({
  where: CancellationPolicyWhereInputSchema.optional(),
  orderBy: z.union([ CancellationPolicyOrderByWithAggregationInputSchema.array(),CancellationPolicyOrderByWithAggregationInputSchema ]).optional(),
  by: CancellationPolicyScalarFieldEnumSchema.array(),
  having: CancellationPolicyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CancellationPolicyGroupByArgsSchema;
