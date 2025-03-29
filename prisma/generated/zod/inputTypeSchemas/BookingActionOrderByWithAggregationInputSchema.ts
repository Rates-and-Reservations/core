import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookingActionCountOrderByAggregateInputSchema } from './BookingActionCountOrderByAggregateInputSchema';
import { BookingActionMaxOrderByAggregateInputSchema } from './BookingActionMaxOrderByAggregateInputSchema';
import { BookingActionMinOrderByAggregateInputSchema } from './BookingActionMinOrderByAggregateInputSchema';

export const BookingActionOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingActionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingTemplateId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  config: z.lazy(() => SortOrderSchema).optional(),
  required: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingActionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingActionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingActionMinOrderByAggregateInputSchema).optional()
}).strict();

export default BookingActionOrderByWithAggregationInputSchema;
