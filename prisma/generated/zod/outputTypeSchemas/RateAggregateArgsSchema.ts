import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateWhereInputSchema } from '../inputTypeSchemas/RateWhereInputSchema'
import { RateOrderByWithRelationInputSchema } from '../inputTypeSchemas/RateOrderByWithRelationInputSchema'
import { RateWhereUniqueInputSchema } from '../inputTypeSchemas/RateWhereUniqueInputSchema'

export const RateAggregateArgsSchema: z.ZodType<Prisma.RateAggregateArgs> = z.object({
  where: RateWhereInputSchema.optional(),
  orderBy: z.union([ RateOrderByWithRelationInputSchema.array(),RateOrderByWithRelationInputSchema ]).optional(),
  cursor: RateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RateAggregateArgsSchema;
