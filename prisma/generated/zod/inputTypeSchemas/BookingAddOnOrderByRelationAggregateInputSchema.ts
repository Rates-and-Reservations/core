import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingAddOnOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BookingAddOnOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingAddOnOrderByRelationAggregateInputSchema;
