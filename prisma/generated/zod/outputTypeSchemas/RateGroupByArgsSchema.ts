import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateWhereInputSchema } from '../inputTypeSchemas/RateWhereInputSchema'
import { RateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RateOrderByWithAggregationInputSchema'
import { RateScalarFieldEnumSchema } from '../inputTypeSchemas/RateScalarFieldEnumSchema'
import { RateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RateScalarWhereWithAggregatesInputSchema'

export const RateGroupByArgsSchema: z.ZodType<Prisma.RateGroupByArgs> = z.object({
  where: RateWhereInputSchema.optional(),
  orderBy: z.union([ RateOrderByWithAggregationInputSchema.array(),RateOrderByWithAggregationInputSchema ]).optional(),
  by: RateScalarFieldEnumSchema.array(),
  having: RateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RateGroupByArgsSchema;
