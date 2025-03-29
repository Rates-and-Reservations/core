import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountWhereInputSchema } from '../inputTypeSchemas/DiscountWhereInputSchema'
import { DiscountOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DiscountOrderByWithAggregationInputSchema'
import { DiscountScalarFieldEnumSchema } from '../inputTypeSchemas/DiscountScalarFieldEnumSchema'
import { DiscountScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DiscountScalarWhereWithAggregatesInputSchema'

export const DiscountGroupByArgsSchema: z.ZodType<Prisma.DiscountGroupByArgs> = z.object({
  where: DiscountWhereInputSchema.optional(),
  orderBy: z.union([ DiscountOrderByWithAggregationInputSchema.array(),DiscountOrderByWithAggregationInputSchema ]).optional(),
  by: DiscountScalarFieldEnumSchema.array(),
  having: DiscountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DiscountGroupByArgsSchema;
