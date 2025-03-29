import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AppInstallScopeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppInstallScopeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AppInstallScopeScalarWhereWithAggregatesInputSchema),z.lazy(() => AppInstallScopeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppInstallScopeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppInstallScopeScalarWhereWithAggregatesInputSchema),z.lazy(() => AppInstallScopeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  appInstallId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  scopeId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AppInstallScopeScalarWhereWithAggregatesInputSchema;
