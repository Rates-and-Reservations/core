import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RateAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  orderIndex: z.lazy(() => SortOrderSchema).optional(),
  taxAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RateAvgOrderByAggregateInputSchema;
