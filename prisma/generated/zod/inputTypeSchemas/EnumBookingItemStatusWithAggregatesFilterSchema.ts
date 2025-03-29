import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { NestedEnumBookingItemStatusWithAggregatesFilterSchema } from './NestedEnumBookingItemStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBookingItemStatusFilterSchema } from './NestedEnumBookingItemStatusFilterSchema';

export const EnumBookingItemStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBookingItemStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BookingItemStatusSchema).optional(),
  in: z.lazy(() => BookingItemStatusSchema).array().optional(),
  notIn: z.lazy(() => BookingItemStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => BookingItemStatusSchema),z.lazy(() => NestedEnumBookingItemStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBookingItemStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBookingItemStatusFilterSchema).optional()
}).strict();

export default EnumBookingItemStatusWithAggregatesFilterSchema;
