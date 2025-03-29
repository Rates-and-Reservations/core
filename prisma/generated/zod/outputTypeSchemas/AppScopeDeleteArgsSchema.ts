import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeIncludeSchema } from '../inputTypeSchemas/AppScopeIncludeSchema'
import { AppScopeWhereUniqueInputSchema } from '../inputTypeSchemas/AppScopeWhereUniqueInputSchema'
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

export const AppScopeDeleteArgsSchema: z.ZodType<Prisma.AppScopeDeleteArgs> = z.object({
  select: AppScopeSelectSchema.optional(),
  include: z.lazy(() => AppScopeIncludeSchema).optional(),
  where: AppScopeWhereUniqueInputSchema,
}).strict() ;

export default AppScopeDeleteArgsSchema;
