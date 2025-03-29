import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingAddOnAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BookingAddOnAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingAddOnAvgOrderByAggregateInputSchema;
