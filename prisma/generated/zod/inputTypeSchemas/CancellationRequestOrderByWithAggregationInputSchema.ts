import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CancellationRequestCountOrderByAggregateInputSchema } from './CancellationRequestCountOrderByAggregateInputSchema';
import { CancellationRequestAvgOrderByAggregateInputSchema } from './CancellationRequestAvgOrderByAggregateInputSchema';
import { CancellationRequestMaxOrderByAggregateInputSchema } from './CancellationRequestMaxOrderByAggregateInputSchema';
import { CancellationRequestMinOrderByAggregateInputSchema } from './CancellationRequestMinOrderByAggregateInputSchema';
import { CancellationRequestSumOrderByAggregateInputSchema } from './CancellationRequestSumOrderByAggregateInputSchema';

export const CancellationRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.CancellationRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  bookingItemId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requestedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  processedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  declinedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refundAmount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CancellationRequestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CancellationRequestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CancellationRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CancellationRequestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CancellationRequestSumOrderByAggregateInputSchema).optional()
}).strict();

export default CancellationRequestOrderByWithAggregationInputSchema;
