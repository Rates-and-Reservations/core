import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RateCountOrderByAggregateInputSchema } from './RateCountOrderByAggregateInputSchema';
import { RateAvgOrderByAggregateInputSchema } from './RateAvgOrderByAggregateInputSchema';
import { RateMaxOrderByAggregateInputSchema } from './RateMaxOrderByAggregateInputSchema';
import { RateMinOrderByAggregateInputSchema } from './RateMinOrderByAggregateInputSchema';
import { RateSumOrderByAggregateInputSchema } from './RateSumOrderByAggregateInputSchema';

export const RateOrderByWithAggregationInputSchema: z.ZodType<Prisma.RateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  resourceId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  durationType: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  isPublished: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  orderIndex: z.lazy(() => SortOrderSchema).optional(),
  bookingStartDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bookingEndDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usageStartDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  usageEndDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  taxType: z.lazy(() => SortOrderSchema).optional(),
  taxAmount: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RateSumOrderByAggregateInputSchema).optional()
}).strict();

export default RateOrderByWithAggregationInputSchema;
