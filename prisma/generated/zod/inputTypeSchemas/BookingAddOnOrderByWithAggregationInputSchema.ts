import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BookingAddOnCountOrderByAggregateInputSchema } from './BookingAddOnCountOrderByAggregateInputSchema';
import { BookingAddOnAvgOrderByAggregateInputSchema } from './BookingAddOnAvgOrderByAggregateInputSchema';
import { BookingAddOnMaxOrderByAggregateInputSchema } from './BookingAddOnMaxOrderByAggregateInputSchema';
import { BookingAddOnMinOrderByAggregateInputSchema } from './BookingAddOnMinOrderByAggregateInputSchema';
import { BookingAddOnSumOrderByAggregateInputSchema } from './BookingAddOnSumOrderByAggregateInputSchema';

export const BookingAddOnOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingAddOnOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  addOnId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  addOnName: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingAddOnCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BookingAddOnAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingAddOnMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingAddOnMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BookingAddOnSumOrderByAggregateInputSchema).optional()
}).strict();

export default BookingAddOnOrderByWithAggregationInputSchema;
