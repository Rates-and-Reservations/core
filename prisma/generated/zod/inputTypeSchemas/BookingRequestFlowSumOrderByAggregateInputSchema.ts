import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingRequestFlowSumOrderByAggregateInputSchema: z.ZodType<Prisma.BookingRequestFlowSumOrderByAggregateInput> = z.object({
  usageLimit: z.lazy(() => SortOrderSchema).optional(),
  usageCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingRequestFlowSumOrderByAggregateInputSchema;
