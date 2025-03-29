import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ApiUsageStatCountOrderByAggregateInputSchema: z.ZodType<Prisma.ApiUsageStatCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  apiKeyId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  requestCount: z.lazy(() => SortOrderSchema).optional(),
  successCount: z.lazy(() => SortOrderSchema).optional(),
  errorCount: z.lazy(() => SortOrderSchema).optional(),
  rateLimitHits: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ApiUsageStatCountOrderByAggregateInputSchema;
