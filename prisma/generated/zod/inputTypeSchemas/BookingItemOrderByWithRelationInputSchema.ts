import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookingOrderByWithRelationInputSchema } from './BookingOrderByWithRelationInputSchema';
import { BookingRateSnapshotOrderByWithRelationInputSchema } from './BookingRateSnapshotOrderByWithRelationInputSchema';
import { BookingItemAddOnOrderByRelationAggregateInputSchema } from './BookingItemAddOnOrderByRelationAggregateInputSchema';
import { CancellationRequestOrderByRelationAggregateInputSchema } from './CancellationRequestOrderByRelationAggregateInputSchema';

export const BookingItemOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingItemOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  bookingRateSnapshotId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  booking: z.lazy(() => BookingOrderByWithRelationInputSchema).optional(),
  bookingRateSnapshot: z.lazy(() => BookingRateSnapshotOrderByWithRelationInputSchema).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnOrderByRelationAggregateInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestOrderByRelationAggregateInputSchema).optional()
}).strict();

export default BookingItemOrderByWithRelationInputSchema;
