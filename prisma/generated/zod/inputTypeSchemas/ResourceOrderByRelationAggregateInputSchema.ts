import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ResourceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceOrderByRelationAggregateInputSchema;
