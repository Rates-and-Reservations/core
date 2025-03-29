import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WaitlistEntryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WaitlistEntryAvgOrderByAggregateInput> = z.object({
  priority: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WaitlistEntryAvgOrderByAggregateInputSchema;
