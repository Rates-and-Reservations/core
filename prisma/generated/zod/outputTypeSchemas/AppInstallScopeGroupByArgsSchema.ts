import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeWhereInputSchema } from '../inputTypeSchemas/AppInstallScopeWhereInputSchema'
import { AppInstallScopeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AppInstallScopeOrderByWithAggregationInputSchema'
import { AppInstallScopeScalarFieldEnumSchema } from '../inputTypeSchemas/AppInstallScopeScalarFieldEnumSchema'
import { AppInstallScopeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AppInstallScopeScalarWhereWithAggregatesInputSchema'

export const AppInstallScopeGroupByArgsSchema: z.ZodType<Prisma.AppInstallScopeGroupByArgs> = z.object({
  where: AppInstallScopeWhereInputSchema.optional(),
  orderBy: z.union([ AppInstallScopeOrderByWithAggregationInputSchema.array(),AppInstallScopeOrderByWithAggregationInputSchema ]).optional(),
  by: AppInstallScopeScalarFieldEnumSchema.array(),
  having: AppInstallScopeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AppInstallScopeGroupByArgsSchema;
