import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAppInstallStatusFilterSchema } from './NestedEnumAppInstallStatusFilterSchema';

export const NestedEnumAppInstallStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAppInstallStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AppInstallStatusSchema).optional(),
  in: z.lazy(() => AppInstallStatusSchema).array().optional(),
  notIn: z.lazy(() => AppInstallStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AppInstallStatusSchema),z.lazy(() => NestedEnumAppInstallStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAppInstallStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAppInstallStatusFilterSchema).optional()
}).strict();

export default NestedEnumAppInstallStatusWithAggregatesFilterSchema;
