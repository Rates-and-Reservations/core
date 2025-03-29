import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereInputSchema } from './AppInstallWhereInputSchema';

export const AppInstallScalarRelationFilterSchema: z.ZodType<Prisma.AppInstallScalarRelationFilter> = z.object({
  is: z.lazy(() => AppInstallWhereInputSchema).optional(),
  isNot: z.lazy(() => AppInstallWhereInputSchema).optional()
}).strict();

export default AppInstallScalarRelationFilterSchema;
