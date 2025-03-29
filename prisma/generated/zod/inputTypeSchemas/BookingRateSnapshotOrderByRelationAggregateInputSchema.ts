import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingRateSnapshotOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BookingRateSnapshotOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingRateSnapshotOrderByRelationAggregateInputSchema;
