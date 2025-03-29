import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DiscountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DiscountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DiscountOrderByRelationAggregateInputSchema;
