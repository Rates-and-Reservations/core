import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationStatusSchema } from './CancellationStatusSchema';

export const NestedEnumCancellationStatusFilterSchema: z.ZodType<Prisma.NestedEnumCancellationStatusFilter> = z.object({
  equals: z.lazy(() => CancellationStatusSchema).optional(),
  in: z.lazy(() => CancellationStatusSchema).array().optional(),
  notIn: z.lazy(() => CancellationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => CancellationStatusSchema),z.lazy(() => NestedEnumCancellationStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumCancellationStatusFilterSchema;
