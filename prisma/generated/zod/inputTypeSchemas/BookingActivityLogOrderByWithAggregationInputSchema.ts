import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BookingActivityLogCountOrderByAggregateInputSchema } from './BookingActivityLogCountOrderByAggregateInputSchema';
import { BookingActivityLogMaxOrderByAggregateInputSchema } from './BookingActivityLogMaxOrderByAggregateInputSchema';
import { BookingActivityLogMinOrderByAggregateInputSchema } from './BookingActivityLogMinOrderByAggregateInputSchema';

export const BookingActivityLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingActivityLogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  systemAction: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  previousValue: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  newValue: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  performedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  performedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingActivityLogCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingActivityLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingActivityLogMinOrderByAggregateInputSchema).optional()
}).strict();

export default BookingActivityLogOrderByWithAggregationInputSchema;
