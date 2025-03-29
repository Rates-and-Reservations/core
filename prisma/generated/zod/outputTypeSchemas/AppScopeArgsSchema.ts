import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeSelectSchema } from '../inputTypeSchemas/AppScopeSelectSchema';
import { AppScopeIncludeSchema } from '../inputTypeSchemas/AppScopeIncludeSchema';

export const AppScopeArgsSchema: z.ZodType<Prisma.AppScopeDefaultArgs> = z.object({
  select: z.lazy(() => AppScopeSelectSchema).optional(),
  include: z.lazy(() => AppScopeIncludeSchema).optional(),
}).strict();

export default AppScopeArgsSchema;
