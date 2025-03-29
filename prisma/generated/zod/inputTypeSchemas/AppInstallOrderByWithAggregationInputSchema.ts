import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AppInstallCountOrderByAggregateInputSchema } from './AppInstallCountOrderByAggregateInputSchema';
import { AppInstallMaxOrderByAggregateInputSchema } from './AppInstallMaxOrderByAggregateInputSchema';
import { AppInstallMinOrderByAggregateInputSchema } from './AppInstallMinOrderByAggregateInputSchema';

export const AppInstallOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppInstallOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  appId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  installedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  uninstalledAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AppInstallCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AppInstallMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AppInstallMinOrderByAggregateInputSchema).optional()
}).strict();

export default AppInstallOrderByWithAggregationInputSchema;
