import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationSourceSchema } from './CancellationSourceSchema';
import { NestedEnumCancellationSourceWithAggregatesFilterSchema } from './NestedEnumCancellationSourceWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCancellationSourceFilterSchema } from './NestedEnumCancellationSourceFilterSchema';

export const EnumCancellationSourceWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCancellationSourceWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CancellationSourceSchema).optional(),
  in: z.lazy(() => CancellationSourceSchema).array().optional(),
  notIn: z.lazy(() => CancellationSourceSchema).array().optional(),
  not: z.union([ z.lazy(() => CancellationSourceSchema),z.lazy(() => NestedEnumCancellationSourceWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCancellationSourceFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCancellationSourceFilterSchema).optional()
}).strict();

export default EnumCancellationSourceWithAggregatesFilterSchema;
