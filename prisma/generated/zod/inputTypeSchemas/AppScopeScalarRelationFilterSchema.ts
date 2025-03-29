import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppScopeWhereInputSchema } from './AppScopeWhereInputSchema';

export const AppScopeScalarRelationFilterSchema: z.ZodType<Prisma.AppScopeScalarRelationFilter> = z.object({
  is: z.lazy(() => AppScopeWhereInputSchema).optional(),
  isNot: z.lazy(() => AppScopeWhereInputSchema).optional()
}).strict();

export default AppScopeScalarRelationFilterSchema;
