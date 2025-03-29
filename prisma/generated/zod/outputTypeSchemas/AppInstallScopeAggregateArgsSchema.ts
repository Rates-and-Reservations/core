import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeWhereInputSchema } from '../inputTypeSchemas/AppInstallScopeWhereInputSchema'
import { AppInstallScopeOrderByWithRelationInputSchema } from '../inputTypeSchemas/AppInstallScopeOrderByWithRelationInputSchema'
import { AppInstallScopeWhereUniqueInputSchema } from '../inputTypeSchemas/AppInstallScopeWhereUniqueInputSchema'

export const AppInstallScopeAggregateArgsSchema: z.ZodType<Prisma.AppInstallScopeAggregateArgs> = z.object({
  where: AppInstallScopeWhereInputSchema.optional(),
  orderBy: z.union([ AppInstallScopeOrderByWithRelationInputSchema.array(),AppInstallScopeOrderByWithRelationInputSchema ]).optional(),
  cursor: AppInstallScopeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AppInstallScopeAggregateArgsSchema;
