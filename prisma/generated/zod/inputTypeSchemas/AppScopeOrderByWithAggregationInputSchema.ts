import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AppScopeCountOrderByAggregateInputSchema } from './AppScopeCountOrderByAggregateInputSchema';
import { AppScopeMaxOrderByAggregateInputSchema } from './AppScopeMaxOrderByAggregateInputSchema';
import { AppScopeMinOrderByAggregateInputSchema } from './AppScopeMinOrderByAggregateInputSchema';

export const AppScopeOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppScopeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AppScopeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AppScopeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AppScopeMinOrderByAggregateInputSchema).optional()
}).strict();

export default AppScopeOrderByWithAggregationInputSchema;
