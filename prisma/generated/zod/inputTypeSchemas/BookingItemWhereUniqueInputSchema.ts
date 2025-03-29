import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumBookingItemStatusFilterSchema } from './EnumBookingItemStatusFilterSchema';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { BookingScalarRelationFilterSchema } from './BookingScalarRelationFilterSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingRateSnapshotScalarRelationFilterSchema } from './BookingRateSnapshotScalarRelationFilterSchema';
import { BookingRateSnapshotWhereInputSchema } from './BookingRateSnapshotWhereInputSchema';
import { BookingItemAddOnListRelationFilterSchema } from './BookingItemAddOnListRelationFilterSchema';
import { CancellationRequestListRelationFilterSchema } from './CancellationRequestListRelationFilterSchema';

export const BookingItemWhereUniqueInputSchema: z.ZodType<Prisma.BookingItemWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BookingItemWhereInputSchema),z.lazy(() => BookingItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingItemWhereInputSchema),z.lazy(() => BookingItemWhereInputSchema).array() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bookingRateSnapshotId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumBookingItemStatusFilterSchema),z.lazy(() => BookingItemStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  booking: z.union([ z.lazy(() => BookingScalarRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  bookingRateSnapshot: z.union([ z.lazy(() => BookingRateSnapshotScalarRelationFilterSchema),z.lazy(() => BookingRateSnapshotWhereInputSchema) ]).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnListRelationFilterSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestListRelationFilterSchema).optional()
}).strict());

export default BookingItemWhereUniqueInputSchema;
