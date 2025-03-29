import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ApiUsageLogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ApiUsageLogOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ApiUsageLogOrderByRelationAggregateInputSchema;
