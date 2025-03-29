import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceBookingConfigOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ResourceBookingConfigOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceBookingConfigOrderByRelationAggregateInputSchema;
