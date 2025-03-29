import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BusinessTypeSchema } from './BusinessTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBusinessTypeFilterSchema } from './NestedEnumBusinessTypeFilterSchema';

export const NestedEnumBusinessTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBusinessTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional()
}).strict();

export default NestedEnumBusinessTypeWithAggregatesFilterSchema;
