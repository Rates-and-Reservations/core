import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ApiUsageLogCountOrderByAggregateInputSchema: z.ZodType<Prisma.ApiUsageLogCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  apiKeyId: z.lazy(() => SortOrderSchema).optional(),
  endpoint: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  statusCode: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  responseTimeMs: z.lazy(() => SortOrderSchema).optional(),
  rateLimitExceeded: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ApiUsageLogCountOrderByAggregateInputSchema;
