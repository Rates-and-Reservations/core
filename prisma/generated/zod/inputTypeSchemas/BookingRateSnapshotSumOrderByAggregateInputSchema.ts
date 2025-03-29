import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingRateSnapshotSumOrderByAggregateInputSchema: z.ZodType<Prisma.BookingRateSnapshotSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  taxAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingRateSnapshotSumOrderByAggregateInputSchema;
