import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationRequestWhereInputSchema } from '../inputTypeSchemas/CancellationRequestWhereInputSchema'
import { CancellationRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/CancellationRequestOrderByWithRelationInputSchema'
import { CancellationRequestWhereUniqueInputSchema } from '../inputTypeSchemas/CancellationRequestWhereUniqueInputSchema'

export const CancellationRequestAggregateArgsSchema: z.ZodType<Prisma.CancellationRequestAggregateArgs> = z.object({
  where: CancellationRequestWhereInputSchema.optional(),
  orderBy: z.union([ CancellationRequestOrderByWithRelationInputSchema.array(),CancellationRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: CancellationRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CancellationRequestAggregateArgsSchema;
