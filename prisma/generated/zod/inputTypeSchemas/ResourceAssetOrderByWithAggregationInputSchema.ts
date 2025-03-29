import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ResourceAssetCountOrderByAggregateInputSchema } from './ResourceAssetCountOrderByAggregateInputSchema';
import { ResourceAssetAvgOrderByAggregateInputSchema } from './ResourceAssetAvgOrderByAggregateInputSchema';
import { ResourceAssetMaxOrderByAggregateInputSchema } from './ResourceAssetMaxOrderByAggregateInputSchema';
import { ResourceAssetMinOrderByAggregateInputSchema } from './ResourceAssetMinOrderByAggregateInputSchema';
import { ResourceAssetSumOrderByAggregateInputSchema } from './ResourceAssetSumOrderByAggregateInputSchema';

export const ResourceAssetOrderByWithAggregationInputSchema: z.ZodType<Prisma.ResourceAssetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceId: z.lazy(() => SortOrderSchema).optional(),
  assetId: z.lazy(() => SortOrderSchema).optional(),
  isPrimary: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ResourceAssetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ResourceAssetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ResourceAssetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ResourceAssetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ResourceAssetSumOrderByAggregateInputSchema).optional()
}).strict();

export default ResourceAssetOrderByWithAggregationInputSchema;
