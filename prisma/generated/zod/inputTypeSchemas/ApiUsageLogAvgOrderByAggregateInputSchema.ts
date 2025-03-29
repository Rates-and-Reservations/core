import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ApiUsageLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ApiUsageLogAvgOrderByAggregateInput> = z.object({
  statusCode: z.lazy(() => SortOrderSchema).optional(),
  responseTimeMs: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ApiUsageLogAvgOrderByAggregateInputSchema;
