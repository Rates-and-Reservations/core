import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeWhereInputSchema } from './AppInstallScopeWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AppInstallScalarRelationFilterSchema } from './AppInstallScalarRelationFilterSchema';
import { AppInstallWhereInputSchema } from './AppInstallWhereInputSchema';
import { AppScopeScalarRelationFilterSchema } from './AppScopeScalarRelationFilterSchema';
import { AppScopeWhereInputSchema } from './AppScopeWhereInputSchema';

export const AppInstallScopeWhereUniqueInputSchema: z.ZodType<Prisma.AppInstallScopeWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => AppInstallScopeWhereInputSchema),z.lazy(() => AppInstallScopeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppInstallScopeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppInstallScopeWhereInputSchema),z.lazy(() => AppInstallScopeWhereInputSchema).array() ]).optional(),
  appInstallId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scopeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  appInstall: z.union([ z.lazy(() => AppInstallScalarRelationFilterSchema),z.lazy(() => AppInstallWhereInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => AppScopeScalarRelationFilterSchema),z.lazy(() => AppScopeWhereInputSchema) ]).optional(),
}).strict());

export default AppInstallScopeWhereUniqueInputSchema;
