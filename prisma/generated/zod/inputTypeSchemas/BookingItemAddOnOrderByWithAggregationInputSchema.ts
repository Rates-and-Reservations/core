import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookingItemAddOnCountOrderByAggregateInputSchema } from './BookingItemAddOnCountOrderByAggregateInputSchema';
import { BookingItemAddOnAvgOrderByAggregateInputSchema } from './BookingItemAddOnAvgOrderByAggregateInputSchema';
import { BookingItemAddOnMaxOrderByAggregateInputSchema } from './BookingItemAddOnMaxOrderByAggregateInputSchema';
import { BookingItemAddOnMinOrderByAggregateInputSchema } from './BookingItemAddOnMinOrderByAggregateInputSchema';
import { BookingItemAddOnSumOrderByAggregateInputSchema } from './BookingItemAddOnSumOrderByAggregateInputSchema';

export const BookingItemAddOnOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingItemAddOnOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingItemId: z.lazy(() => SortOrderSchema).optional(),
  addOnId: z.lazy(() => SortOrderSchema).optional(),
  addOnName: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingItemAddOnCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BookingItemAddOnAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingItemAddOnMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingItemAddOnMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BookingItemAddOnSumOrderByAggregateInputSchema).optional()
}).strict();

export default BookingItemAddOnOrderByWithAggregationInputSchema;
