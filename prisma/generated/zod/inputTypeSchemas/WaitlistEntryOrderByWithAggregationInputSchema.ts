import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WaitlistEntryCountOrderByAggregateInputSchema } from './WaitlistEntryCountOrderByAggregateInputSchema';
import { WaitlistEntryAvgOrderByAggregateInputSchema } from './WaitlistEntryAvgOrderByAggregateInputSchema';
import { WaitlistEntryMaxOrderByAggregateInputSchema } from './WaitlistEntryMaxOrderByAggregateInputSchema';
import { WaitlistEntryMinOrderByAggregateInputSchema } from './WaitlistEntryMinOrderByAggregateInputSchema';
import { WaitlistEntrySumOrderByAggregateInputSchema } from './WaitlistEntrySumOrderByAggregateInputSchema';

export const WaitlistEntryOrderByWithAggregationInputSchema: z.ZodType<Prisma.WaitlistEntryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  resourceId: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  desiredStartTime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  desiredEndTime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  notifiedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  promotedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WaitlistEntryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WaitlistEntryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WaitlistEntryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WaitlistEntryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WaitlistEntrySumOrderByAggregateInputSchema).optional()
}).strict();

export default WaitlistEntryOrderByWithAggregationInputSchema;
