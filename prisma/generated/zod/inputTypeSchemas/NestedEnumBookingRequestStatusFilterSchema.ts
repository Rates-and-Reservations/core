import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';

export const NestedEnumBookingRequestStatusFilterSchema: z.ZodType<Prisma.NestedEnumBookingRequestStatusFilter> = z.object({
  equals: z.lazy(() => BookingRequestStatusSchema).optional(),
  in: z.lazy(() => BookingRequestStatusSchema).array().optional(),
  notIn: z.lazy(() => BookingRequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => BookingRequestStatusSchema),z.lazy(() => NestedEnumBookingRequestStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumBookingRequestStatusFilterSchema;
