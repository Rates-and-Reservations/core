import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateAddOnWhereInputSchema } from '../inputTypeSchemas/RateAddOnWhereInputSchema'
import { RateAddOnOrderByWithRelationInputSchema } from '../inputTypeSchemas/RateAddOnOrderByWithRelationInputSchema'
import { RateAddOnWhereUniqueInputSchema } from '../inputTypeSchemas/RateAddOnWhereUniqueInputSchema'

export const RateAddOnAggregateArgsSchema: z.ZodType<Prisma.RateAddOnAggregateArgs> = z.object({
  where: RateAddOnWhereInputSchema.optional(),
  orderBy: z.union([ RateAddOnOrderByWithRelationInputSchema.array(),RateAddOnOrderByWithRelationInputSchema ]).optional(),
  cursor: RateAddOnWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RateAddOnAggregateArgsSchema;
