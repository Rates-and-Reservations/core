import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';
import { NestedEnumBookingRequestStatusFilterSchema } from './NestedEnumBookingRequestStatusFilterSchema';

export const EnumBookingRequestStatusFilterSchema: z.ZodType<Prisma.EnumBookingRequestStatusFilter> = z.object({
  equals: z.lazy(() => BookingRequestStatusSchema).optional(),
  in: z.lazy(() => BookingRequestStatusSchema).array().optional(),
  notIn: z.lazy(() => BookingRequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => BookingRequestStatusSchema),z.lazy(() => NestedEnumBookingRequestStatusFilterSchema) ]).optional(),
}).strict();

export default EnumBookingRequestStatusFilterSchema;
