import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeIncludeSchema } from '../inputTypeSchemas/AppScopeIncludeSchema'
import { AppScopeWhereInputSchema } from '../inputTypeSchemas/AppScopeWhereInputSchema'
import { AppScopeOrderByWithRelationInputSchema } from '../inputTypeSchemas/AppScopeOrderByWithRelationInputSchema'
import { AppScopeWhereUniqueInputSchema } from '../inputTypeSchemas/AppScopeWhereUniqueInputSchema'
import { AppScopeScalarFieldEnumSchema } from '../inputTypeSchemas/AppScopeScalarFieldEnumSchema'
import { AppInstallScopeFindManyArgsSchema } from "../outputTypeSchemas/AppInstallScopeFindManyArgsSchema"
import { AppScopeCountOutputTypeArgsSchema } from "../outputTypeSchemas/AppScopeCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppScopeSelectSchema: z.ZodType<Prisma.AppScopeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  AppInstallScope: z.union([z.boolean(),z.lazy(() => AppInstallScopeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppScopeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AppScopeFindManyArgsSchema: z.ZodType<Prisma.AppScopeFindManyArgs> = z.object({
  select: AppScopeSelectSchema.optional(),
  include: z.lazy(() => AppScopeIncludeSchema).optional(),
  where: AppScopeWhereInputSchema.optional(),
  orderBy: z.union([ AppScopeOrderByWithRelationInputSchema.array(),AppScopeOrderByWithRelationInputSchema ]).optional(),
  cursor: AppScopeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppScopeScalarFieldEnumSchema,AppScopeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AppScopeFindManyArgsSchema;
