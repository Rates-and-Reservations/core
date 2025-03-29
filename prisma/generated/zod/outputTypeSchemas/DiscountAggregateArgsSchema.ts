import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountWhereInputSchema } from '../inputTypeSchemas/DiscountWhereInputSchema'
import { DiscountOrderByWithRelationInputSchema } from '../inputTypeSchemas/DiscountOrderByWithRelationInputSchema'
import { DiscountWhereUniqueInputSchema } from '../inputTypeSchemas/DiscountWhereUniqueInputSchema'

export const DiscountAggregateArgsSchema: z.ZodType<Prisma.DiscountAggregateArgs> = z.object({
  where: DiscountWhereInputSchema.optional(),
  orderBy: z.union([ DiscountOrderByWithRelationInputSchema.array(),DiscountOrderByWithRelationInputSchema ]).optional(),
  cursor: DiscountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DiscountAggregateArgsSchema;
