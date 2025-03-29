import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CancellationRequestSumOrderByAggregateInputSchema: z.ZodType<Prisma.CancellationRequestSumOrderByAggregateInput> = z.object({
  refundAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CancellationRequestSumOrderByAggregateInputSchema;
