import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateAddOnWhereInputSchema } from '../inputTypeSchemas/RateAddOnWhereInputSchema'
import { RateAddOnOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RateAddOnOrderByWithAggregationInputSchema'
import { RateAddOnScalarFieldEnumSchema } from '../inputTypeSchemas/RateAddOnScalarFieldEnumSchema'
import { RateAddOnScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RateAddOnScalarWhereWithAggregatesInputSchema'

export const RateAddOnGroupByArgsSchema: z.ZodType<Prisma.RateAddOnGroupByArgs> = z.object({
  where: RateAddOnWhereInputSchema.optional(),
  orderBy: z.union([ RateAddOnOrderByWithAggregationInputSchema.array(),RateAddOnOrderByWithAggregationInputSchema ]).optional(),
  by: RateAddOnScalarFieldEnumSchema.array(),
  having: RateAddOnScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RateAddOnGroupByArgsSchema;
