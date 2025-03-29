import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumBookingItemStatusFilterSchema } from './EnumBookingItemStatusFilterSchema';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';

export const BookingItemScalarWhereInputSchema: z.ZodType<Prisma.BookingItemScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingItemScalarWhereInputSchema),z.lazy(() => BookingItemScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingItemScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingItemScalarWhereInputSchema),z.lazy(() => BookingItemScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bookingRateSnapshotId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumBookingItemStatusFilterSchema),z.lazy(() => BookingItemStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingItemScalarWhereInputSchema;
