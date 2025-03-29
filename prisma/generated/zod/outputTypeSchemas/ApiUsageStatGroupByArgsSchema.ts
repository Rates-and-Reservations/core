import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageStatWhereInputSchema } from '../inputTypeSchemas/ApiUsageStatWhereInputSchema'
import { ApiUsageStatOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ApiUsageStatOrderByWithAggregationInputSchema'
import { ApiUsageStatScalarFieldEnumSchema } from '../inputTypeSchemas/ApiUsageStatScalarFieldEnumSchema'
import { ApiUsageStatScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ApiUsageStatScalarWhereWithAggregatesInputSchema'

export const ApiUsageStatGroupByArgsSchema: z.ZodType<Prisma.ApiUsageStatGroupByArgs> = z.object({
  where: ApiUsageStatWhereInputSchema.optional(),
  orderBy: z.union([ ApiUsageStatOrderByWithAggregationInputSchema.array(),ApiUsageStatOrderByWithAggregationInputSchema ]).optional(),
  by: ApiUsageStatScalarFieldEnumSchema.array(),
  having: ApiUsageStatScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ApiUsageStatGroupByArgsSchema;
