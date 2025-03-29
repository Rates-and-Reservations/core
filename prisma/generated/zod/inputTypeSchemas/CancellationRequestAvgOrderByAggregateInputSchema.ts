import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CancellationRequestAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CancellationRequestAvgOrderByAggregateInput> = z.object({
  refundAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CancellationRequestAvgOrderByAggregateInputSchema;
