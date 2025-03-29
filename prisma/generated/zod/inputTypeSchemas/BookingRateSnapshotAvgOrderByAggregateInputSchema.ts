import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingRateSnapshotAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BookingRateSnapshotAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  taxAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingRateSnapshotAvgOrderByAggregateInputSchema;
