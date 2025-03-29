import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ApiUsageStatAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ApiUsageStatAvgOrderByAggregateInput> = z.object({
  requestCount: z.lazy(() => SortOrderSchema).optional(),
  successCount: z.lazy(() => SortOrderSchema).optional(),
  errorCount: z.lazy(() => SortOrderSchema).optional(),
  rateLimitHits: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ApiUsageStatAvgOrderByAggregateInputSchema;
