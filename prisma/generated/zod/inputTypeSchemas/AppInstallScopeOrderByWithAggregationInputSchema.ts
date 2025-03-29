import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AppInstallScopeCountOrderByAggregateInputSchema } from './AppInstallScopeCountOrderByAggregateInputSchema';
import { AppInstallScopeMaxOrderByAggregateInputSchema } from './AppInstallScopeMaxOrderByAggregateInputSchema';
import { AppInstallScopeMinOrderByAggregateInputSchema } from './AppInstallScopeMinOrderByAggregateInputSchema';

export const AppInstallScopeOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppInstallScopeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  appInstallId: z.lazy(() => SortOrderSchema).optional(),
  scopeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AppInstallScopeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AppInstallScopeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AppInstallScopeMinOrderByAggregateInputSchema).optional()
}).strict();

export default AppInstallScopeOrderByWithAggregationInputSchema;
