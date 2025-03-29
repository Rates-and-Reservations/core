import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CancellationPolicyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CancellationPolicyAvgOrderByAggregateInput> = z.object({
  refundAmount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitHours: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CancellationPolicyAvgOrderByAggregateInputSchema;
