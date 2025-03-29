import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereInputSchema } from './AppInstallWhereInputSchema';

export const AppInstallListRelationFilterSchema: z.ZodType<Prisma.AppInstallListRelationFilter> = z.object({
  every: z.lazy(() => AppInstallWhereInputSchema).optional(),
  some: z.lazy(() => AppInstallWhereInputSchema).optional(),
  none: z.lazy(() => AppInstallWhereInputSchema).optional()
}).strict();

export default AppInstallListRelationFilterSchema;
