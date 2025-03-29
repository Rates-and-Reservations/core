import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppWhereInputSchema } from './AppWhereInputSchema';

export const AppScalarRelationFilterSchema: z.ZodType<Prisma.AppScalarRelationFilter> = z.object({
  is: z.lazy(() => AppWhereInputSchema).optional(),
  isNot: z.lazy(() => AppWhereInputSchema).optional()
}).strict();

export default AppScalarRelationFilterSchema;
