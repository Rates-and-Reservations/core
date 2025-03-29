import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeFindManyArgsSchema } from "../outputTypeSchemas/AppInstallScopeFindManyArgsSchema"
import { AppScopeCountOutputTypeArgsSchema } from "../outputTypeSchemas/AppScopeCountOutputTypeArgsSchema"

export const AppScopeSelectSchema: z.ZodType<Prisma.AppScopeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  AppInstallScope: z.union([z.boolean(),z.lazy(() => AppInstallScopeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppScopeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AppScopeSelectSchema;
