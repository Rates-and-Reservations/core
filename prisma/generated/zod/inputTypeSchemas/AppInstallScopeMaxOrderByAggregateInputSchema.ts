import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AppInstallScopeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AppInstallScopeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  appInstallId: z.lazy(() => SortOrderSchema).optional(),
  scopeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AppInstallScopeMaxOrderByAggregateInputSchema;
