import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingItemAddOnMinOrderByAggregateInputSchema: z.ZodType<Prisma.BookingItemAddOnMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingItemId: z.lazy(() => SortOrderSchema).optional(),
  addOnId: z.lazy(() => SortOrderSchema).optional(),
  addOnName: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingItemAddOnMinOrderByAggregateInputSchema;
