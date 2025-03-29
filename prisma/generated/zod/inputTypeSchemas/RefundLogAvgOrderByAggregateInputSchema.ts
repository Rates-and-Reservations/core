import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RefundLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RefundLogAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RefundLogAvgOrderByAggregateInputSchema;
