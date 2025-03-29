import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountTypeSchema } from './DiscountTypeSchema';
import { NestedEnumDiscountTypeWithAggregatesFilterSchema } from './NestedEnumDiscountTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumDiscountTypeFilterSchema } from './NestedEnumDiscountTypeFilterSchema';

export const EnumDiscountTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDiscountTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => DiscountTypeSchema).optional(),
  in: z.lazy(() => DiscountTypeSchema).array().optional(),
  notIn: z.lazy(() => DiscountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DiscountTypeSchema),z.lazy(() => NestedEnumDiscountTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDiscountTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDiscountTypeFilterSchema).optional()
}).strict();

export default EnumDiscountTypeWithAggregatesFilterSchema;
