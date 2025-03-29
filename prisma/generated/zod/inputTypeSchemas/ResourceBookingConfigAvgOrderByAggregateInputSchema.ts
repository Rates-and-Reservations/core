import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceBookingConfigAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ResourceBookingConfigAvgOrderByAggregateInput> = z.object({
  minDuration: z.lazy(() => SortOrderSchema).optional(),
  maxDuration: z.lazy(() => SortOrderSchema).optional(),
  bufferTime: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceBookingConfigAvgOrderByAggregateInputSchema;
