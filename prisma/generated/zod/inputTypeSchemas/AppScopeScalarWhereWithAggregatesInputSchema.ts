import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AppScopeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppScopeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AppScopeScalarWhereWithAggregatesInputSchema),z.lazy(() => AppScopeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppScopeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppScopeScalarWhereWithAggregatesInputSchema),z.lazy(() => AppScopeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AppScopeScalarWhereWithAggregatesInputSchema;
