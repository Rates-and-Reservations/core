import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumAppInstallStatusWithAggregatesFilterSchema } from './EnumAppInstallStatusWithAggregatesFilterSchema';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AppInstallScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppInstallScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AppInstallScalarWhereWithAggregatesInputSchema),z.lazy(() => AppInstallScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppInstallScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppInstallScalarWhereWithAggregatesInputSchema),z.lazy(() => AppInstallScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  appId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumAppInstallStatusWithAggregatesFilterSchema),z.lazy(() => AppInstallStatusSchema) ]).optional(),
  installedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  uninstalledAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AppInstallScalarWhereWithAggregatesInputSchema;
