import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { NestedEnumAppInstallStatusWithAggregatesFilterSchema } from './NestedEnumAppInstallStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAppInstallStatusFilterSchema } from './NestedEnumAppInstallStatusFilterSchema';

export const EnumAppInstallStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAppInstallStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AppInstallStatusSchema).optional(),
  in: z.lazy(() => AppInstallStatusSchema).array().optional(),
  notIn: z.lazy(() => AppInstallStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AppInstallStatusSchema),z.lazy(() => NestedEnumAppInstallStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAppInstallStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAppInstallStatusFilterSchema).optional()
}).strict();

export default EnumAppInstallStatusWithAggregatesFilterSchema;
