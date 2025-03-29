import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeWhereInputSchema } from './AppInstallScopeWhereInputSchema';

export const AppInstallScopeListRelationFilterSchema: z.ZodType<Prisma.AppInstallScopeListRelationFilter> = z.object({
  every: z.lazy(() => AppInstallScopeWhereInputSchema).optional(),
  some: z.lazy(() => AppInstallScopeWhereInputSchema).optional(),
  none: z.lazy(() => AppInstallScopeWhereInputSchema).optional()
}).strict();

export default AppInstallScopeListRelationFilterSchema;
