import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestWhereInputSchema } from '../inputTypeSchemas/RefundRequestWhereInputSchema'
import { RefundRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/RefundRequestOrderByWithRelationInputSchema'
import { RefundRequestWhereUniqueInputSchema } from '../inputTypeSchemas/RefundRequestWhereUniqueInputSchema'

export const RefundRequestAggregateArgsSchema: z.ZodType<Prisma.RefundRequestAggregateArgs> = z.object({
  where: RefundRequestWhereInputSchema.optional(),
  orderBy: z.union([ RefundRequestOrderByWithRelationInputSchema.array(),RefundRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: RefundRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RefundRequestAggregateArgsSchema;
