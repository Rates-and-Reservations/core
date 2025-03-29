import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeWhereInputSchema } from '../inputTypeSchemas/AppScopeWhereInputSchema'
import { AppScopeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AppScopeOrderByWithAggregationInputSchema'
import { AppScopeScalarFieldEnumSchema } from '../inputTypeSchemas/AppScopeScalarFieldEnumSchema'
import { AppScopeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AppScopeScalarWhereWithAggregatesInputSchema'

export const AppScopeGroupByArgsSchema: z.ZodType<Prisma.AppScopeGroupByArgs> = z.object({
  where: AppScopeWhereInputSchema.optional(),
  orderBy: z.union([ AppScopeOrderByWithAggregationInputSchema.array(),AppScopeOrderByWithAggregationInputSchema ]).optional(),
  by: AppScopeScalarFieldEnumSchema.array(),
  having: AppScopeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AppScopeGroupByArgsSchema;
