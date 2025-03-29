import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AppInstallScopeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AppInstallScopeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AppInstallScopeOrderByRelationAggregateInputSchema;
