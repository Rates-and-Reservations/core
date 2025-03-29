import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AppInstallScopeListRelationFilterSchema } from './AppInstallScopeListRelationFilterSchema';

export const AppScopeWhereInputSchema: z.ZodType<Prisma.AppScopeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AppScopeWhereInputSchema),z.lazy(() => AppScopeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppScopeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppScopeWhereInputSchema),z.lazy(() => AppScopeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  AppInstallScope: z.lazy(() => AppInstallScopeListRelationFilterSchema).optional()
}).strict();

export default AppScopeWhereInputSchema;
