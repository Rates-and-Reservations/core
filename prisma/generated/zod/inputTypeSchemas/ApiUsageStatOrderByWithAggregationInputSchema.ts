import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ApiUsageStatCountOrderByAggregateInputSchema } from './ApiUsageStatCountOrderByAggregateInputSchema';
import { ApiUsageStatAvgOrderByAggregateInputSchema } from './ApiUsageStatAvgOrderByAggregateInputSchema';
import { ApiUsageStatMaxOrderByAggregateInputSchema } from './ApiUsageStatMaxOrderByAggregateInputSchema';
import { ApiUsageStatMinOrderByAggregateInputSchema } from './ApiUsageStatMinOrderByAggregateInputSchema';
import { ApiUsageStatSumOrderByAggregateInputSchema } from './ApiUsageStatSumOrderByAggregateInputSchema';

export const ApiUsageStatOrderByWithAggregationInputSchema: z.ZodType<Prisma.ApiUsageStatOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  apiKeyId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  requestCount: z.lazy(() => SortOrderSchema).optional(),
  successCount: z.lazy(() => SortOrderSchema).optional(),
  errorCount: z.lazy(() => SortOrderSchema).optional(),
  rateLimitHits: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ApiUsageStatCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ApiUsageStatAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ApiUsageStatMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ApiUsageStatMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ApiUsageStatSumOrderByAggregateInputSchema).optional()
}).strict();

export default ApiUsageStatOrderByWithAggregationInputSchema;
