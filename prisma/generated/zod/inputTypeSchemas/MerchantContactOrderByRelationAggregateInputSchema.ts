import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MerchantContactOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MerchantContactOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MerchantContactOrderByRelationAggregateInputSchema;
