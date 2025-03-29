import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RefundRequestCountOrderByAggregateInputSchema } from './RefundRequestCountOrderByAggregateInputSchema';
import { RefundRequestAvgOrderByAggregateInputSchema } from './RefundRequestAvgOrderByAggregateInputSchema';
import { RefundRequestMaxOrderByAggregateInputSchema } from './RefundRequestMaxOrderByAggregateInputSchema';
import { RefundRequestMinOrderByAggregateInputSchema } from './RefundRequestMinOrderByAggregateInputSchema';
import { RefundRequestSumOrderByAggregateInputSchema } from './RefundRequestSumOrderByAggregateInputSchema';

export const RefundRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.RefundRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  paymentTransactionId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  reason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rejectedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requestedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requestedAt: z.lazy(() => SortOrderSchema).optional(),
  processedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RefundRequestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RefundRequestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RefundRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RefundRequestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RefundRequestSumOrderByAggregateInputSchema).optional()
}).strict();

export default RefundRequestOrderByWithAggregationInputSchema;
