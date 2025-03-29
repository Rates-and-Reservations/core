import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ResourceBookingConfigCountOrderByAggregateInputSchema } from './ResourceBookingConfigCountOrderByAggregateInputSchema';
import { ResourceBookingConfigAvgOrderByAggregateInputSchema } from './ResourceBookingConfigAvgOrderByAggregateInputSchema';
import { ResourceBookingConfigMaxOrderByAggregateInputSchema } from './ResourceBookingConfigMaxOrderByAggregateInputSchema';
import { ResourceBookingConfigMinOrderByAggregateInputSchema } from './ResourceBookingConfigMinOrderByAggregateInputSchema';
import { ResourceBookingConfigSumOrderByAggregateInputSchema } from './ResourceBookingConfigSumOrderByAggregateInputSchema';

export const ResourceBookingConfigOrderByWithAggregationInputSchema: z.ZodType<Prisma.ResourceBookingConfigOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceId: z.lazy(() => SortOrderSchema).optional(),
  minDuration: z.lazy(() => SortOrderSchema).optional(),
  maxDuration: z.lazy(() => SortOrderSchema).optional(),
  bufferTime: z.lazy(() => SortOrderSchema).optional(),
  availableDays: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  blackoutDates: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  allowMultipleBookings: z.lazy(() => SortOrderSchema).optional(),
  enableWaitlist: z.lazy(() => SortOrderSchema).optional(),
  cancellationPolicyId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ResourceBookingConfigCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ResourceBookingConfigAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ResourceBookingConfigMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ResourceBookingConfigMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ResourceBookingConfigSumOrderByAggregateInputSchema).optional()
}).strict();

export default ResourceBookingConfigOrderByWithAggregationInputSchema;
