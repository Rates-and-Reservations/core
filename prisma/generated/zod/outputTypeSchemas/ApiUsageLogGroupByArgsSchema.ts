import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageLogWhereInputSchema } from '../inputTypeSchemas/ApiUsageLogWhereInputSchema'
import { ApiUsageLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ApiUsageLogOrderByWithAggregationInputSchema'
import { ApiUsageLogScalarFieldEnumSchema } from '../inputTypeSchemas/ApiUsageLogScalarFieldEnumSchema'
import { ApiUsageLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ApiUsageLogScalarWhereWithAggregatesInputSchema'

export const ApiUsageLogGroupByArgsSchema: z.ZodType<Prisma.ApiUsageLogGroupByArgs> = z.object({
  where: ApiUsageLogWhereInputSchema.optional(),
  orderBy: z.union([ ApiUsageLogOrderByWithAggregationInputSchema.array(),ApiUsageLogOrderByWithAggregationInputSchema ]).optional(),
  by: ApiUsageLogScalarFieldEnumSchema.array(),
  having: ApiUsageLogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ApiUsageLogGroupByArgsSchema;
