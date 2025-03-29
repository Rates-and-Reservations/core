import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceSumOrderByAggregateInputSchema: z.ZodType<Prisma.ResourceSumOrderByAggregateInput> = z.object({
  capacity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceSumOrderByAggregateInputSchema;
