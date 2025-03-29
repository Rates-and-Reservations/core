import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceTemplateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ResourceTemplateOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceTemplateOrderByRelationAggregateInputSchema;
