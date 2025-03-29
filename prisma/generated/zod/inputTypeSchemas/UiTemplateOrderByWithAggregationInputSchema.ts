import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UiTemplateCountOrderByAggregateInputSchema } from './UiTemplateCountOrderByAggregateInputSchema';
import { UiTemplateMaxOrderByAggregateInputSchema } from './UiTemplateMaxOrderByAggregateInputSchema';
import { UiTemplateMinOrderByAggregateInputSchema } from './UiTemplateMinOrderByAggregateInputSchema';

export const UiTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.UiTemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  previewImageUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isSystem: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  config: z.lazy(() => SortOrderSchema).optional(),
  uiTheme: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UiTemplateCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UiTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UiTemplateMinOrderByAggregateInputSchema).optional()
}).strict();

export default UiTemplateOrderByWithAggregationInputSchema;
