import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CancellationRequestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CancellationRequestOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CancellationRequestOrderByRelationAggregateInputSchema;
