import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingActionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BookingActionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingActionOrderByRelationAggregateInputSchema;
