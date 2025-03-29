import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageStatWhereInputSchema } from '../inputTypeSchemas/ApiUsageStatWhereInputSchema'
import { ApiUsageStatOrderByWithRelationInputSchema } from '../inputTypeSchemas/ApiUsageStatOrderByWithRelationInputSchema'
import { ApiUsageStatWhereUniqueInputSchema } from '../inputTypeSchemas/ApiUsageStatWhereUniqueInputSchema'

export const ApiUsageStatAggregateArgsSchema: z.ZodType<Prisma.ApiUsageStatAggregateArgs> = z.object({
  where: ApiUsageStatWhereInputSchema.optional(),
  orderBy: z.union([ ApiUsageStatOrderByWithRelationInputSchema.array(),ApiUsageStatOrderByWithRelationInputSchema ]).optional(),
  cursor: ApiUsageStatWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ApiUsageStatAggregateArgsSchema;
