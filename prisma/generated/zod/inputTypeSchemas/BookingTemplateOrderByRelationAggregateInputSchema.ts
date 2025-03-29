import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingTemplateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BookingTemplateOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingTemplateOrderByRelationAggregateInputSchema;
