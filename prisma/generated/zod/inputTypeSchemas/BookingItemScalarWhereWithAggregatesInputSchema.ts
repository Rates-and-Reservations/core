import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumBookingItemStatusWithAggregatesFilterSchema } from './EnumBookingItemStatusWithAggregatesFilterSchema';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';

export const BookingItemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookingItemScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BookingItemScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingItemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingItemScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  bookingRateSnapshotId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumBookingItemStatusWithAggregatesFilterSchema),z.lazy(() => BookingItemStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BookingItemScalarWhereWithAggregatesInputSchema;
