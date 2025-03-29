import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundTypeSchema } from './RefundTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRefundTypeFilterSchema } from './NestedEnumRefundTypeFilterSchema';

export const NestedEnumRefundTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRefundTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RefundTypeSchema).optional(),
  in: z.lazy(() => RefundTypeSchema).array().optional(),
  notIn: z.lazy(() => RefundTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RefundTypeSchema),z.lazy(() => NestedEnumRefundTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRefundTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRefundTypeFilterSchema).optional()
}).strict();

export default NestedEnumRefundTypeWithAggregatesFilterSchema;
