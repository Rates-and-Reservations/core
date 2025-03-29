import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ApiUsageLogSumOrderByAggregateInputSchema: z.ZodType<Prisma.ApiUsageLogSumOrderByAggregateInput> = z.object({
  statusCode: z.lazy(() => SortOrderSchema).optional(),
  responseTimeMs: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ApiUsageLogSumOrderByAggregateInputSchema;
