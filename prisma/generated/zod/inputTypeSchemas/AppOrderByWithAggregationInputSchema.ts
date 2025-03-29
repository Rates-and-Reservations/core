import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AppCountOrderByAggregateInputSchema } from './AppCountOrderByAggregateInputSchema';
import { AppMaxOrderByAggregateInputSchema } from './AppMaxOrderByAggregateInputSchema';
import { AppMinOrderByAggregateInputSchema } from './AppMinOrderByAggregateInputSchema';

export const AppOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  logoUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  websiteUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  clientSecret: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  redirectUrls: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  webhookUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scopes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPublic: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AppCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AppMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AppMinOrderByAggregateInputSchema).optional()
}).strict();

export default AppOrderByWithAggregationInputSchema;
