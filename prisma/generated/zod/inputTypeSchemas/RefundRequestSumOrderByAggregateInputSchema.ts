import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RefundRequestSumOrderByAggregateInputSchema: z.ZodType<Prisma.RefundRequestSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RefundRequestSumOrderByAggregateInputSchema;
