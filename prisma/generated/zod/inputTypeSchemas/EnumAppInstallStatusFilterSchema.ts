import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { NestedEnumAppInstallStatusFilterSchema } from './NestedEnumAppInstallStatusFilterSchema';

export const EnumAppInstallStatusFilterSchema: z.ZodType<Prisma.EnumAppInstallStatusFilter> = z.object({
  equals: z.lazy(() => AppInstallStatusSchema).optional(),
  in: z.lazy(() => AppInstallStatusSchema).array().optional(),
  notIn: z.lazy(() => AppInstallStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AppInstallStatusSchema),z.lazy(() => NestedEnumAppInstallStatusFilterSchema) ]).optional(),
}).strict();

export default EnumAppInstallStatusFilterSchema;
