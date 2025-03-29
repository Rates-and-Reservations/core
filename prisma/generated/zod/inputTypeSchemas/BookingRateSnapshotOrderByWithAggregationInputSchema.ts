import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BookingRateSnapshotCountOrderByAggregateInputSchema } from './BookingRateSnapshotCountOrderByAggregateInputSchema';
import { BookingRateSnapshotAvgOrderByAggregateInputSchema } from './BookingRateSnapshotAvgOrderByAggregateInputSchema';
import { BookingRateSnapshotMaxOrderByAggregateInputSchema } from './BookingRateSnapshotMaxOrderByAggregateInputSchema';
import { BookingRateSnapshotMinOrderByAggregateInputSchema } from './BookingRateSnapshotMinOrderByAggregateInputSchema';
import { BookingRateSnapshotSumOrderByAggregateInputSchema } from './BookingRateSnapshotSumOrderByAggregateInputSchema';

export const BookingRateSnapshotOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingRateSnapshotOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rateId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  durationType: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  bookingStartDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bookingEndDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usageStartDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usageEndDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  taxType: z.lazy(() => SortOrderSchema).optional(),
  taxAmount: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingRateSnapshotCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BookingRateSnapshotAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingRateSnapshotMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingRateSnapshotMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BookingRateSnapshotSumOrderByAggregateInputSchema).optional()
}).strict();

export default BookingRateSnapshotOrderByWithAggregationInputSchema;
