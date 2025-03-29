import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RateAddOnOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RateAddOnOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RateAddOnOrderByRelationAggregateInputSchema;
