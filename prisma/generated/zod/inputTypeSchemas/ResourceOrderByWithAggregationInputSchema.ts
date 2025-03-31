import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ResourceCountOrderByAggregateInputSchema } from './ResourceCountOrderByAggregateInputSchema';
import { ResourceAvgOrderByAggregateInputSchema } from './ResourceAvgOrderByAggregateInputSchema';
import { ResourceMaxOrderByAggregateInputSchema } from './ResourceMaxOrderByAggregateInputSchema';
import { ResourceMinOrderByAggregateInputSchema } from './ResourceMinOrderByAggregateInputSchema';
import { ResourceSumOrderByAggregateInputSchema } from './ResourceSumOrderByAggregateInputSchema';

export const ResourceOrderByWithAggregationInputSchema: z.ZodType<Prisma.ResourceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  templateId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ResourceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ResourceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ResourceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ResourceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ResourceSumOrderByAggregateInputSchema).optional()
}).strict();

export default ResourceOrderByWithAggregationInputSchema;
