import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BookingTemplateCountOrderByAggregateInputSchema } from './BookingTemplateCountOrderByAggregateInputSchema';
import { BookingTemplateMaxOrderByAggregateInputSchema } from './BookingTemplateMaxOrderByAggregateInputSchema';
import { BookingTemplateMinOrderByAggregateInputSchema } from './BookingTemplateMinOrderByAggregateInputSchema';

export const BookingTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingTemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  selectionMode: z.lazy(() => SortOrderSchema).optional(),
  config: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingTemplateCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingTemplateMinOrderByAggregateInputSchema).optional()
}).strict();

export default BookingTemplateOrderByWithAggregationInputSchema;
