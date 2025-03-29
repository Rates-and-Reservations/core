import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageLogWhereInputSchema } from '../inputTypeSchemas/ApiUsageLogWhereInputSchema'
import { ApiUsageLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/ApiUsageLogOrderByWithRelationInputSchema'
import { ApiUsageLogWhereUniqueInputSchema } from '../inputTypeSchemas/ApiUsageLogWhereUniqueInputSchema'

export const ApiUsageLogAggregateArgsSchema: z.ZodType<Prisma.ApiUsageLogAggregateArgs> = z.object({
  where: ApiUsageLogWhereInputSchema.optional(),
  orderBy: z.union([ ApiUsageLogOrderByWithRelationInputSchema.array(),ApiUsageLogOrderByWithRelationInputSchema ]).optional(),
  cursor: ApiUsageLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ApiUsageLogAggregateArgsSchema;
