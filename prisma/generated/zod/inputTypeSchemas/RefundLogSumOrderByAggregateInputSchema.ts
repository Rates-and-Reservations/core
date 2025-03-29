import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RefundLogSumOrderByAggregateInputSchema: z.ZodType<Prisma.RefundLogSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RefundLogSumOrderByAggregateInputSchema;
