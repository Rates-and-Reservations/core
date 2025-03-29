import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeSelectSchema } from '../inputTypeSchemas/AppInstallScopeSelectSchema';
import { AppInstallScopeIncludeSchema } from '../inputTypeSchemas/AppInstallScopeIncludeSchema';

export const AppInstallScopeArgsSchema: z.ZodType<Prisma.AppInstallScopeDefaultArgs> = z.object({
  select: z.lazy(() => AppInstallScopeSelectSchema).optional(),
  include: z.lazy(() => AppInstallScopeIncludeSchema).optional(),
}).strict();

export default AppInstallScopeArgsSchema;
