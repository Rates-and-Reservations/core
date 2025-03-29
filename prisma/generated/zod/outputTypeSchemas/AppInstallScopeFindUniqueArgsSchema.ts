import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeIncludeSchema } from '../inputTypeSchemas/AppInstallScopeIncludeSchema'
import { AppInstallScopeWhereUniqueInputSchema } from '../inputTypeSchemas/AppInstallScopeWhereUniqueInputSchema'
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

export const AppInstallScopeFindUniqueArgsSchema: z.ZodType<Prisma.AppInstallScopeFindUniqueArgs> = z.object({
  select: AppInstallScopeSelectSchema.optional(),
  include: z.lazy(() => AppInstallScopeIncludeSchema).optional(),
  where: AppInstallScopeWhereUniqueInputSchema,
}).strict() ;

export default AppInstallScopeFindUniqueArgsSchema;
