import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RateAddOnMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RateAddOnMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rateId: z.lazy(() => SortOrderSchema).optional(),
  addOnId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RateAddOnMaxOrderByAggregateInputSchema;
