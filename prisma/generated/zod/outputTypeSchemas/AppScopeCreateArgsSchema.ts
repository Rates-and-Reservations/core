import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeIncludeSchema } from '../inputTypeSchemas/AppScopeIncludeSchema'
import { AppScopeCreateInputSchema } from '../inputTypeSchemas/AppScopeCreateInputSchema'
import { AppScopeUncheckedCreateInputSchema } from '../inputTypeSchemas/AppScopeUncheckedCreateInputSchema'
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

export const AppScopeCreateArgsSchema: z.ZodType<Prisma.AppScopeCreateArgs> = z.object({
  select: AppScopeSelectSchema.optional(),
  include: z.lazy(() => AppScopeIncludeSchema).optional(),
  data: z.union([ AppScopeCreateInputSchema,AppScopeUncheckedCreateInputSchema ]),
}).strict() ;

export default AppScopeCreateArgsSchema;
