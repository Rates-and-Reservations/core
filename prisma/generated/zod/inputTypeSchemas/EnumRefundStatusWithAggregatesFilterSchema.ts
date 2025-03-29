import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundStatusSchema } from './RefundStatusSchema';
import { NestedEnumRefundStatusWithAggregatesFilterSchema } from './NestedEnumRefundStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRefundStatusFilterSchema } from './NestedEnumRefundStatusFilterSchema';

export const EnumRefundStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRefundStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RefundStatusSchema).optional(),
  in: z.lazy(() => RefundStatusSchema).array().optional(),
  notIn: z.lazy(() => RefundStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RefundStatusSchema),z.lazy(() => NestedEnumRefundStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRefundStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRefundStatusFilterSchema).optional()
}).strict();

export default EnumRefundStatusWithAggregatesFilterSchema;
