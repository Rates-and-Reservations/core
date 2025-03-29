import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WaitlistEntryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WaitlistEntryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WaitlistEntryOrderByRelationAggregateInputSchema;
