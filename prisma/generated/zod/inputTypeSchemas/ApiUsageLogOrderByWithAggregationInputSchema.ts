import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ApiUsageLogCountOrderByAggregateInputSchema } from './ApiUsageLogCountOrderByAggregateInputSchema';
import { ApiUsageLogAvgOrderByAggregateInputSchema } from './ApiUsageLogAvgOrderByAggregateInputSchema';
import { ApiUsageLogMaxOrderByAggregateInputSchema } from './ApiUsageLogMaxOrderByAggregateInputSchema';
import { ApiUsageLogMinOrderByAggregateInputSchema } from './ApiUsageLogMinOrderByAggregateInputSchema';
import { ApiUsageLogSumOrderByAggregateInputSchema } from './ApiUsageLogSumOrderByAggregateInputSchema';

export const ApiUsageLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.ApiUsageLogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  apiKeyId: z.lazy(() => SortOrderSchema).optional(),
  endpoint: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  statusCode: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  responseTimeMs: z.lazy(() => SortOrderSchema).optional(),
  rateLimitExceeded: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ApiUsageLogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ApiUsageLogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ApiUsageLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ApiUsageLogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ApiUsageLogSumOrderByAggregateInputSchema).optional()
}).strict();

export default ApiUsageLogOrderByWithAggregationInputSchema;
