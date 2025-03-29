import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';
import { NestedEnumBookingRequestStatusWithAggregatesFilterSchema } from './NestedEnumBookingRequestStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBookingRequestStatusFilterSchema } from './NestedEnumBookingRequestStatusFilterSchema';

export const EnumBookingRequestStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBookingRequestStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BookingRequestStatusSchema).optional(),
  in: z.lazy(() => BookingRequestStatusSchema).array().optional(),
  notIn: z.lazy(() => BookingRequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => BookingRequestStatusSchema),z.lazy(() => NestedEnumBookingRequestStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBookingRequestStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBookingRequestStatusFilterSchema).optional()
}).strict();

export default EnumBookingRequestStatusWithAggregatesFilterSchema;
