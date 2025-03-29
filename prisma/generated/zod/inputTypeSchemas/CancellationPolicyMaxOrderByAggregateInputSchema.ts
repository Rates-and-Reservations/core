import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CancellationPolicyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CancellationPolicyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  refundType: z.lazy(() => SortOrderSchema).optional(),
  refundAmount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitHours: z.lazy(() => SortOrderSchema).optional(),
  appliesTo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CancellationPolicyMaxOrderByAggregateInputSchema;
