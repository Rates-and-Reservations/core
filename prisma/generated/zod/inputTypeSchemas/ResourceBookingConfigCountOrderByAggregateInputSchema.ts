import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ResourceBookingConfigCountOrderByAggregateInputSchema: z.ZodType<Prisma.ResourceBookingConfigCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  resourceId: z.lazy(() => SortOrderSchema).optional(),
  minDuration: z.lazy(() => SortOrderSchema).optional(),
  maxDuration: z.lazy(() => SortOrderSchema).optional(),
  bufferTime: z.lazy(() => SortOrderSchema).optional(),
  availableDays: z.lazy(() => SortOrderSchema).optional(),
  blackoutDates: z.lazy(() => SortOrderSchema).optional(),
  allowMultipleBookings: z.lazy(() => SortOrderSchema).optional(),
  enableWaitlist: z.lazy(() => SortOrderSchema).optional(),
  cancellationPolicyId: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ResourceBookingConfigCountOrderByAggregateInputSchema;
