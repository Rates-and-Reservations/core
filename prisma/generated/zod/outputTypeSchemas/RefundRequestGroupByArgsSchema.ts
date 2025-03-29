import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestWhereInputSchema } from '../inputTypeSchemas/RefundRequestWhereInputSchema'
import { RefundRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RefundRequestOrderByWithAggregationInputSchema'
import { RefundRequestScalarFieldEnumSchema } from '../inputTypeSchemas/RefundRequestScalarFieldEnumSchema'
import { RefundRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RefundRequestScalarWhereWithAggregatesInputSchema'

export const RefundRequestGroupByArgsSchema: z.ZodType<Prisma.RefundRequestGroupByArgs> = z.object({
  where: RefundRequestWhereInputSchema.optional(),
  orderBy: z.union([ RefundRequestOrderByWithAggregationInputSchema.array(),RefundRequestOrderByWithAggregationInputSchema ]).optional(),
  by: RefundRequestScalarFieldEnumSchema.array(),
  having: RefundRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RefundRequestGroupByArgsSchema;
