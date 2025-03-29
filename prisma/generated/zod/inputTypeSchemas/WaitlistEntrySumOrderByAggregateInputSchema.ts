import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WaitlistEntrySumOrderByAggregateInputSchema: z.ZodType<Prisma.WaitlistEntrySumOrderByAggregateInput> = z.object({
  priority: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WaitlistEntrySumOrderByAggregateInputSchema;
