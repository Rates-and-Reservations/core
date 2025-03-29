import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ApiUsageStatSumOrderByAggregateInputSchema: z.ZodType<Prisma.ApiUsageStatSumOrderByAggregateInput> = z.object({
  requestCount: z.lazy(() => SortOrderSchema).optional(),
  successCount: z.lazy(() => SortOrderSchema).optional(),
  errorCount: z.lazy(() => SortOrderSchema).optional(),
  rateLimitHits: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ApiUsageStatSumOrderByAggregateInputSchema;
