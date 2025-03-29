import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestStatusSchema } from './RefundRequestStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRefundRequestStatusFilterSchema } from './NestedEnumRefundRequestStatusFilterSchema';

export const NestedEnumRefundRequestStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRefundRequestStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RefundRequestStatusSchema).optional(),
  in: z.lazy(() => RefundRequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RefundRequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RefundRequestStatusSchema),z.lazy(() => NestedEnumRefundRequestStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRefundRequestStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRefundRequestStatusFilterSchema).optional()
}).strict();

export default NestedEnumRefundRequestStatusWithAggregatesFilterSchema;
