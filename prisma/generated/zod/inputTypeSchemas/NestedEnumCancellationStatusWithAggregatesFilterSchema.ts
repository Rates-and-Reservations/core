import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationStatusSchema } from './CancellationStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCancellationStatusFilterSchema } from './NestedEnumCancellationStatusFilterSchema';

export const NestedEnumCancellationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCancellationStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CancellationStatusSchema).optional(),
  in: z.lazy(() => CancellationStatusSchema).array().optional(),
  notIn: z.lazy(() => CancellationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => CancellationStatusSchema),z.lazy(() => NestedEnumCancellationStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCancellationStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCancellationStatusFilterSchema).optional()
}).strict();

export default NestedEnumCancellationStatusWithAggregatesFilterSchema;
