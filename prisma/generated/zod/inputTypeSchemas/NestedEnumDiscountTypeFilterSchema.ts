import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountTypeSchema } from './DiscountTypeSchema';

export const NestedEnumDiscountTypeFilterSchema: z.ZodType<Prisma.NestedEnumDiscountTypeFilter> = z.object({
  equals: z.lazy(() => DiscountTypeSchema).optional(),
  in: z.lazy(() => DiscountTypeSchema).array().optional(),
  notIn: z.lazy(() => DiscountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DiscountTypeSchema),z.lazy(() => NestedEnumDiscountTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumDiscountTypeFilterSchema;
