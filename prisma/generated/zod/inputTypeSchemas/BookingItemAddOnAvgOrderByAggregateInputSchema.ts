import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingItemAddOnAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BookingItemAddOnAvgOrderByAggregateInput> = z.object({
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingItemAddOnAvgOrderByAggregateInputSchema;
