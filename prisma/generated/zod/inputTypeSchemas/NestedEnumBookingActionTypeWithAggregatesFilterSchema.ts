import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionTypeSchema } from './BookingActionTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBookingActionTypeFilterSchema } from './NestedEnumBookingActionTypeFilterSchema';

export const NestedEnumBookingActionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBookingActionTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BookingActionTypeSchema).optional(),
  in: z.lazy(() => BookingActionTypeSchema).array().optional(),
  notIn: z.lazy(() => BookingActionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BookingActionTypeSchema),z.lazy(() => NestedEnumBookingActionTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBookingActionTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBookingActionTypeFilterSchema).optional()
}).strict();

export default NestedEnumBookingActionTypeWithAggregatesFilterSchema;
