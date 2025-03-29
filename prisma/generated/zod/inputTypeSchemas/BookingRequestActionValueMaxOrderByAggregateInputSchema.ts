import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingRequestActionValueMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BookingRequestActionValueMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingRequestId: z.lazy(() => SortOrderSchema).optional(),
  bookingActionId: z.lazy(() => SortOrderSchema).optional(),
  completedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingRequestActionValueMaxOrderByAggregateInputSchema;
