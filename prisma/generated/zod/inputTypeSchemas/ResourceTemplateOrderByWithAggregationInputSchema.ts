import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ResourceTemplateCountOrderByAggregateInputSchema } from './ResourceTemplateCountOrderByAggregateInputSchema';
import { ResourceTemplateMaxOrderByAggregateInputSchema } from './ResourceTemplateMaxOrderByAggregateInputSchema';
import { ResourceTemplateMinOrderByAggregateInputSchema } from './ResourceTemplateMinOrderByAggregateInputSchema';

export const ResourceTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.ResourceTemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  defaultFields: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ResourceTemplateCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ResourceTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ResourceTemplateMinOrderByAggregateInputSchema).optional()
}).strict();

export default ResourceTemplateOrderByWithAggregationInputSchema;
