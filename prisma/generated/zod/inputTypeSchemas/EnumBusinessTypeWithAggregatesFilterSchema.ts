import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BusinessTypeSchema } from './BusinessTypeSchema';
import { NestedEnumBusinessTypeWithAggregatesFilterSchema } from './NestedEnumBusinessTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBusinessTypeFilterSchema } from './NestedEnumBusinessTypeFilterSchema';

export const EnumBusinessTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBusinessTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional()
}).strict();

export default EnumBusinessTypeWithAggregatesFilterSchema;
