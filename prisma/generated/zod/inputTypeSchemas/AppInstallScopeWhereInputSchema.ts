import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AppInstallScalarRelationFilterSchema } from './AppInstallScalarRelationFilterSchema';
import { AppInstallWhereInputSchema } from './AppInstallWhereInputSchema';
import { AppScopeScalarRelationFilterSchema } from './AppScopeScalarRelationFilterSchema';
import { AppScopeWhereInputSchema } from './AppScopeWhereInputSchema';

export const AppInstallScopeWhereInputSchema: z.ZodType<Prisma.AppInstallScopeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AppInstallScopeWhereInputSchema),z.lazy(() => AppInstallScopeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppInstallScopeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppInstallScopeWhereInputSchema),z.lazy(() => AppInstallScopeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appInstallId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scopeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  appInstall: z.union([ z.lazy(() => AppInstallScalarRelationFilterSchema),z.lazy(() => AppInstallWhereInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => AppScopeScalarRelationFilterSchema),z.lazy(() => AppScopeWhereInputSchema) ]).optional(),
}).strict();

export default AppInstallScopeWhereInputSchema;
