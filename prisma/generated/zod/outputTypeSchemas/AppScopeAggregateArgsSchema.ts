import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeWhereInputSchema } from '../inputTypeSchemas/AppScopeWhereInputSchema'
import { AppScopeOrderByWithRelationInputSchema } from '../inputTypeSchemas/AppScopeOrderByWithRelationInputSchema'
import { AppScopeWhereUniqueInputSchema } from '../inputTypeSchemas/AppScopeWhereUniqueInputSchema'

export const AppScopeAggregateArgsSchema: z.ZodType<Prisma.AppScopeAggregateArgs> = z.object({
  where: AppScopeWhereInputSchema.optional(),
  orderBy: z.union([ AppScopeOrderByWithRelationInputSchema.array(),AppScopeOrderByWithRelationInputSchema ]).optional(),
  cursor: AppScopeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AppScopeAggregateArgsSchema;
