import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AppInstallScopeOrderByRelationAggregateInputSchema } from './AppInstallScopeOrderByRelationAggregateInputSchema';

export const AppScopeOrderByWithRelationInputSchema: z.ZodType<Prisma.AppScopeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  AppInstallScope: z.lazy(() => AppInstallScopeOrderByRelationAggregateInputSchema).optional()
}).strict();

export default AppScopeOrderByWithRelationInputSchema;
