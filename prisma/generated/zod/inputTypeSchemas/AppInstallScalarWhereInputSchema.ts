import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAppInstallStatusFilterSchema } from './EnumAppInstallStatusFilterSchema';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const AppInstallScalarWhereInputSchema: z.ZodType<Prisma.AppInstallScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AppInstallScalarWhereInputSchema),z.lazy(() => AppInstallScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppInstallScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppInstallScalarWhereInputSchema),z.lazy(() => AppInstallScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumAppInstallStatusFilterSchema),z.lazy(() => AppInstallStatusSchema) ]).optional(),
  installedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  uninstalledAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AppInstallScalarWhereInputSchema;
