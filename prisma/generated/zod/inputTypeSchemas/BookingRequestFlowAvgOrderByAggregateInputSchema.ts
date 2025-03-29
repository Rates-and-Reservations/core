import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingRequestFlowAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BookingRequestFlowAvgOrderByAggregateInput> = z.object({
  usageLimit: z.lazy(() => SortOrderSchema).optional(),
  usageCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingRequestFlowAvgOrderByAggregateInputSchema;
