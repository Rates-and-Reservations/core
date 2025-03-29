import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionTypeSchema } from './BookingActionTypeSchema';

export const NestedEnumBookingActionTypeFilterSchema: z.ZodType<Prisma.NestedEnumBookingActionTypeFilter> = z.object({
  equals: z.lazy(() => BookingActionTypeSchema).optional(),
  in: z.lazy(() => BookingActionTypeSchema).array().optional(),
  notIn: z.lazy(() => BookingActionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BookingActionTypeSchema),z.lazy(() => NestedEnumBookingActionTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumBookingActionTypeFilterSchema;
