import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateDurationTypeSchema } from './RateDurationTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRateDurationTypeFilterSchema } from './NestedEnumRateDurationTypeFilterSchema';

export const NestedEnumRateDurationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRateDurationTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RateDurationTypeSchema).optional(),
  in: z.lazy(() => RateDurationTypeSchema).array().optional(),
  notIn: z.lazy(() => RateDurationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RateDurationTypeSchema),z.lazy(() => NestedEnumRateDurationTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRateDurationTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRateDurationTypeFilterSchema).optional()
}).strict();

export default NestedEnumRateDurationTypeWithAggregatesFilterSchema;
