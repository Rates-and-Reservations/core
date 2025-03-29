import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundLogWhereInputSchema } from '../inputTypeSchemas/RefundLogWhereInputSchema'
import { RefundLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/RefundLogOrderByWithRelationInputSchema'
import { RefundLogWhereUniqueInputSchema } from '../inputTypeSchemas/RefundLogWhereUniqueInputSchema'

export const RefundLogAggregateArgsSchema: z.ZodType<Prisma.RefundLogAggregateArgs> = z.object({
  where: RefundLogWhereInputSchema.optional(),
  orderBy: z.union([ RefundLogOrderByWithRelationInputSchema.array(),RefundLogOrderByWithRelationInputSchema ]).optional(),
  cursor: RefundLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RefundLogAggregateArgsSchema;
