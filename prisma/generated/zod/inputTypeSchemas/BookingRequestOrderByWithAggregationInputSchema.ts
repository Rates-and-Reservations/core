import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BookingRequestCountOrderByAggregateInputSchema } from './BookingRequestCountOrderByAggregateInputSchema';
import { BookingRequestMaxOrderByAggregateInputSchema } from './BookingRequestMaxOrderByAggregateInputSchema';
import { BookingRequestMinOrderByAggregateInputSchema } from './BookingRequestMinOrderByAggregateInputSchema';

export const BookingRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  prefilledFields: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  resourceId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  templateId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  actionStatus: z.lazy(() => SortOrderSchema).optional(),
  finalizedSnapshot: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BookingRequestCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingRequestMinOrderByAggregateInputSchema).optional()
}).strict();

export default BookingRequestOrderByWithAggregationInputSchema;
