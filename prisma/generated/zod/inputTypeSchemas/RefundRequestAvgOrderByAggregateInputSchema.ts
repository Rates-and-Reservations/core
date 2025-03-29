import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RefundRequestAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RefundRequestAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RefundRequestAvgOrderByAggregateInputSchema;
