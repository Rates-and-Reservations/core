import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestStatusSchema } from './RefundRequestStatusSchema';
import { NestedEnumRefundRequestStatusFilterSchema } from './NestedEnumRefundRequestStatusFilterSchema';

export const EnumRefundRequestStatusFilterSchema: z.ZodType<Prisma.EnumRefundRequestStatusFilter> = z.object({
  equals: z.lazy(() => RefundRequestStatusSchema).optional(),
  in: z.lazy(() => RefundRequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RefundRequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RefundRequestStatusSchema),z.lazy(() => NestedEnumRefundRequestStatusFilterSchema) ]).optional(),
}).strict();

export default EnumRefundRequestStatusFilterSchema;
