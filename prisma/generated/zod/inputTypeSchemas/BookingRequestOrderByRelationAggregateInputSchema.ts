import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingRequestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BookingRequestOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingRequestOrderByRelationAggregateInputSchema;
