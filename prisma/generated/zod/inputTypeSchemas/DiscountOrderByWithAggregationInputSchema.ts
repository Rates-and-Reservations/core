import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DiscountCountOrderByAggregateInputSchema } from './DiscountCountOrderByAggregateInputSchema';
import { DiscountAvgOrderByAggregateInputSchema } from './DiscountAvgOrderByAggregateInputSchema';
import { DiscountMaxOrderByAggregateInputSchema } from './DiscountMaxOrderByAggregateInputSchema';
import { DiscountMinOrderByAggregateInputSchema } from './DiscountMinOrderByAggregateInputSchema';
import { DiscountSumOrderByAggregateInputSchema } from './DiscountSumOrderByAggregateInputSchema';

export const DiscountOrderByWithAggregationInputSchema: z.ZodType<Prisma.DiscountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  code: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  discountType: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  usageLimit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usedCount: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  endDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DiscountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DiscountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DiscountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DiscountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DiscountSumOrderByAggregateInputSchema).optional()
}).strict();

export default DiscountOrderByWithAggregationInputSchema;
