import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ResourceAvgOrderByAggregateInput> = z.object({
  capacity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceAvgOrderByAggregateInputSchema;
