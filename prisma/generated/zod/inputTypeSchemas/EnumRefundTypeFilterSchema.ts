import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundTypeSchema } from './RefundTypeSchema';
import { NestedEnumRefundTypeFilterSchema } from './NestedEnumRefundTypeFilterSchema';

export const EnumRefundTypeFilterSchema: z.ZodType<Prisma.EnumRefundTypeFilter> = z.object({
  equals: z.lazy(() => RefundTypeSchema).optional(),
  in: z.lazy(() => RefundTypeSchema).array().optional(),
  notIn: z.lazy(() => RefundTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RefundTypeSchema),z.lazy(() => NestedEnumRefundTypeFilterSchema) ]).optional(),
}).strict();

export default EnumRefundTypeFilterSchema;
