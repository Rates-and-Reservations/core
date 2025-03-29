import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RefundLogCountOrderByAggregateInputSchema } from './RefundLogCountOrderByAggregateInputSchema';
import { RefundLogAvgOrderByAggregateInputSchema } from './RefundLogAvgOrderByAggregateInputSchema';
import { RefundLogMaxOrderByAggregateInputSchema } from './RefundLogMaxOrderByAggregateInputSchema';
import { RefundLogMinOrderByAggregateInputSchema } from './RefundLogMinOrderByAggregateInputSchema';
import { RefundLogSumOrderByAggregateInputSchema } from './RefundLogSumOrderByAggregateInputSchema';

export const RefundLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.RefundLogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  refundRequestId: z.lazy(() => SortOrderSchema).optional(),
  paymentTransactionId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerRefundId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  processedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RefundLogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RefundLogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RefundLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RefundLogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RefundLogSumOrderByAggregateInputSchema).optional()
}).strict();

export default RefundLogOrderByWithAggregationInputSchema;
