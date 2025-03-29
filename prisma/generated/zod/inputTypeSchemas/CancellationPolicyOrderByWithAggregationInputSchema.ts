import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CancellationPolicyCountOrderByAggregateInputSchema } from './CancellationPolicyCountOrderByAggregateInputSchema';
import { CancellationPolicyAvgOrderByAggregateInputSchema } from './CancellationPolicyAvgOrderByAggregateInputSchema';
import { CancellationPolicyMaxOrderByAggregateInputSchema } from './CancellationPolicyMaxOrderByAggregateInputSchema';
import { CancellationPolicyMinOrderByAggregateInputSchema } from './CancellationPolicyMinOrderByAggregateInputSchema';
import { CancellationPolicySumOrderByAggregateInputSchema } from './CancellationPolicySumOrderByAggregateInputSchema';

export const CancellationPolicyOrderByWithAggregationInputSchema: z.ZodType<Prisma.CancellationPolicyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refundType: z.lazy(() => SortOrderSchema).optional(),
  refundAmount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timeLimitHours: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  appliesTo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CancellationPolicyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CancellationPolicyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CancellationPolicyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CancellationPolicyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CancellationPolicySumOrderByAggregateInputSchema).optional()
}).strict();

export default CancellationPolicyOrderByWithAggregationInputSchema;
