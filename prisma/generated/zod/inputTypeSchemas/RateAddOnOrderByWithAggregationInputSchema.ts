import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RateAddOnCountOrderByAggregateInputSchema } from './RateAddOnCountOrderByAggregateInputSchema';
import { RateAddOnMaxOrderByAggregateInputSchema } from './RateAddOnMaxOrderByAggregateInputSchema';
import { RateAddOnMinOrderByAggregateInputSchema } from './RateAddOnMinOrderByAggregateInputSchema';

export const RateAddOnOrderByWithAggregationInputSchema: z.ZodType<Prisma.RateAddOnOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rateId: z.lazy(() => SortOrderSchema).optional(),
  addOnId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RateAddOnCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RateAddOnMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RateAddOnMinOrderByAggregateInputSchema).optional()
}).strict();

export default RateAddOnOrderByWithAggregationInputSchema;
