import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundStatusSchema } from './RefundStatusSchema';

export const NestedEnumRefundStatusFilterSchema: z.ZodType<Prisma.NestedEnumRefundStatusFilter> = z.object({
  equals: z.lazy(() => RefundStatusSchema).optional(),
  in: z.lazy(() => RefundStatusSchema).array().optional(),
  notIn: z.lazy(() => RefundStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RefundStatusSchema),z.lazy(() => NestedEnumRefundStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumRefundStatusFilterSchema;
