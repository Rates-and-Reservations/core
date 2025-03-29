import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeIncludeSchema } from '../inputTypeSchemas/AppInstallScopeIncludeSchema'
import { AppInstallScopeWhereInputSchema } from '../inputTypeSchemas/AppInstallScopeWhereInputSchema'
import { AppInstallScopeOrderByWithRelationInputSchema } from '../inputTypeSchemas/AppInstallScopeOrderByWithRelationInputSchema'
import { AppInstallScopeWhereUniqueInputSchema } from '../inputTypeSchemas/AppInstallScopeWhereUniqueInputSchema'
import { AppInstallScopeScalarFieldEnumSchema } from '../inputTypeSchemas/AppInstallScopeScalarFieldEnumSchema'
import { AppInstallArgsSchema } from "../outputTypeSchemas/AppInstallArgsSchema"
import { AppScopeArgsSchema } from "../outputTypeSchemas/AppScopeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppInstallScopeSelectSchema: z.ZodType<Prisma.AppInstallScopeSelect> = z.object({
  id: z.boolean().optional(),
  appInstallId: z.boolean().optional(),
  scopeId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  appInstall: z.union([z.boolean(),z.lazy(() => AppInstallArgsSchema)]).optional(),
  scope: z.union([z.boolean(),z.lazy(() => AppScopeArgsSchema)]).optional(),
}).strict()

export const AppInstallScopeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AppInstallScopeFindFirstOrThrowArgs> = z.object({
  select: AppInstallScopeSelectSchema.optional(),
  include: z.lazy(() => AppInstallScopeIncludeSchema).optional(),
  where: AppInstallScopeWhereInputSchema.optional(),
  orderBy: z.union([ AppInstallScopeOrderByWithRelationInputSchema.array(),AppInstallScopeOrderByWithRelationInputSchema ]).optional(),
  cursor: AppInstallScopeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppInstallScopeScalarFieldEnumSchema,AppInstallScopeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AppInstallScopeFindFirstOrThrowArgsSchema;
