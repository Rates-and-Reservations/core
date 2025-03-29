import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CancellationPolicySumOrderByAggregateInputSchema: z.ZodType<Prisma.CancellationPolicySumOrderByAggregateInput> = z.object({
  refundAmount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitHours: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CancellationPolicySumOrderByAggregateInputSchema;
