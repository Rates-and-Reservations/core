import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationRequestWhereInputSchema } from '../inputTypeSchemas/CancellationRequestWhereInputSchema'
import { CancellationRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CancellationRequestOrderByWithAggregationInputSchema'
import { CancellationRequestScalarFieldEnumSchema } from '../inputTypeSchemas/CancellationRequestScalarFieldEnumSchema'
import { CancellationRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CancellationRequestScalarWhereWithAggregatesInputSchema'

export const CancellationRequestGroupByArgsSchema: z.ZodType<Prisma.CancellationRequestGroupByArgs> = z.object({
  where: CancellationRequestWhereInputSchema.optional(),
  orderBy: z.union([ CancellationRequestOrderByWithAggregationInputSchema.array(),CancellationRequestOrderByWithAggregationInputSchema ]).optional(),
  by: CancellationRequestScalarFieldEnumSchema.array(),
  having: CancellationRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CancellationRequestGroupByArgsSchema;
