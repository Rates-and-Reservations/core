import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AddOnCountOrderByAggregateInputSchema } from './AddOnCountOrderByAggregateInputSchema';
import { AddOnAvgOrderByAggregateInputSchema } from './AddOnAvgOrderByAggregateInputSchema';
import { AddOnMaxOrderByAggregateInputSchema } from './AddOnMaxOrderByAggregateInputSchema';
import { AddOnMinOrderByAggregateInputSchema } from './AddOnMinOrderByAggregateInputSchema';
import { AddOnSumOrderByAggregateInputSchema } from './AddOnSumOrderByAggregateInputSchema';

export const AddOnOrderByWithAggregationInputSchema: z.ZodType<Prisma.AddOnOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  showInBooking: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AddOnCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AddOnAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AddOnMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AddOnMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AddOnSumOrderByAggregateInputSchema).optional()
}).strict();

export default AddOnOrderByWithAggregationInputSchema;
