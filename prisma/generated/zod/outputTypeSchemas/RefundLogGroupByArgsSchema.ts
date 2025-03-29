import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundLogWhereInputSchema } from '../inputTypeSchemas/RefundLogWhereInputSchema'
import { RefundLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RefundLogOrderByWithAggregationInputSchema'
import { RefundLogScalarFieldEnumSchema } from '../inputTypeSchemas/RefundLogScalarFieldEnumSchema'
import { RefundLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RefundLogScalarWhereWithAggregatesInputSchema'

export const RefundLogGroupByArgsSchema: z.ZodType<Prisma.RefundLogGroupByArgs> = z.object({
  where: RefundLogWhereInputSchema.optional(),
  orderBy: z.union([ RefundLogOrderByWithAggregationInputSchema.array(),RefundLogOrderByWithAggregationInputSchema ]).optional(),
  by: RefundLogScalarFieldEnumSchema.array(),
  having: RefundLogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RefundLogGroupByArgsSchema;
