import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallArgsSchema } from "../outputTypeSchemas/AppInstallArgsSchema"
import { AppScopeArgsSchema } from "../outputTypeSchemas/AppScopeArgsSchema"

export const AppInstallScopeIncludeSchema: z.ZodType<Prisma.AppInstallScopeInclude> = z.object({
  appInstall: z.union([z.boolean(),z.lazy(() => AppInstallArgsSchema)]).optional(),
  scope: z.union([z.boolean(),z.lazy(() => AppScopeArgsSchema)]).optional(),
}).strict()

export default AppInstallScopeIncludeSchema;
