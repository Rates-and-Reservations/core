import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationScopeSchema } from './CancellationScopeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCancellationScopeFilterSchema } from './NestedEnumCancellationScopeFilterSchema';

export const NestedEnumCancellationScopeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCancellationScopeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CancellationScopeSchema).optional(),
  in: z.lazy(() => CancellationScopeSchema).array().optional(),
  notIn: z.lazy(() => CancellationScopeSchema).array().optional(),
  not: z.union([ z.lazy(() => CancellationScopeSchema),z.lazy(() => NestedEnumCancellationScopeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCancellationScopeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCancellationScopeFilterSchema).optional()
}).strict();

export default NestedEnumCancellationScopeWithAggregatesFilterSchema;
