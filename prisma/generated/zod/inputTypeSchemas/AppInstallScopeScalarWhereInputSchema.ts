import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const AppInstallScopeScalarWhereInputSchema: z.ZodType<Prisma.AppInstallScopeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AppInstallScopeScalarWhereInputSchema),z.lazy(() => AppInstallScopeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppInstallScopeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppInstallScopeScalarWhereInputSchema),z.lazy(() => AppInstallScopeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appInstallId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scopeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AppInstallScopeScalarWhereInputSchema;
