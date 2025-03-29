import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingItemAddOnOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BookingItemAddOnOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingItemAddOnOrderByRelationAggregateInputSchema;
