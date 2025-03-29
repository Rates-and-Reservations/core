import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeFindManyArgsSchema } from "../outputTypeSchemas/AppInstallScopeFindManyArgsSchema"
import { AppScopeCountOutputTypeArgsSchema } from "../outputTypeSchemas/AppScopeCountOutputTypeArgsSchema"

export const AppScopeIncludeSchema: z.ZodType<Prisma.AppScopeInclude> = z.object({
  AppInstallScope: z.union([z.boolean(),z.lazy(() => AppInstallScopeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppScopeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AppScopeIncludeSchema;
