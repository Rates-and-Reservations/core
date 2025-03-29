import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';

export const NestedEnumBookingItemStatusFilterSchema: z.ZodType<Prisma.NestedEnumBookingItemStatusFilter> = z.object({
  equals: z.lazy(() => BookingItemStatusSchema).optional(),
  in: z.lazy(() => BookingItemStatusSchema).array().optional(),
  notIn: z.lazy(() => BookingItemStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => BookingItemStatusSchema),z.lazy(() => NestedEnumBookingItemStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumBookingItemStatusFilterSchema;
