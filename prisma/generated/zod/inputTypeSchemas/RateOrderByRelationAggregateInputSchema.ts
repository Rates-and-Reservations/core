import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RateOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RateOrderByRelationAggregateInputSchema;
