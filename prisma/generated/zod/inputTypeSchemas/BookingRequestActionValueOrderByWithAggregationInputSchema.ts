import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookingRequestActionValueCountOrderByAggregateInputSchema } from './BookingRequestActionValueCountOrderByAggregateInputSchema';
import { BookingRequestActionValueMaxOrderByAggregateInputSchema } from './BookingRequestActionValueMaxOrderByAggregateInputSchema';
import { BookingRequestActionValueMinOrderByAggregateInputSchema } from './BookingRequestActionValueMinOrderByAggregateInputSchema';

export const BookingRequestActionValueOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingRequestActionValueOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingRequestId: z.lazy(() => SortOrderSchema).optional(),
  bookingActionId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  completedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingRequestActionValueCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingRequestActionValueMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingRequestActionValueMinOrderByAggregateInputSchema).optional()
}).strict();

export default BookingRequestActionValueOrderByWithAggregationInputSchema;
