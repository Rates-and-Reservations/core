import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ResourceOrderByWithRelationInputSchema } from './ResourceOrderByWithRelationInputSchema';
import { CancellationPolicyOrderByWithRelationInputSchema } from './CancellationPolicyOrderByWithRelationInputSchema';

export const ResourceBookingConfigOrderByWithRelationInputSchema: z.ZodType<Prisma.ResourceBookingConfigOrderByWithRelationInput> = z.object({
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
  resource: z.lazy(() => ResourceOrderByWithRelationInputSchema).optional(),
  cancellationPolicy: z.lazy(() => CancellationPolicyOrderByWithRelationInputSchema).optional()
}).strict();

export default ResourceBookingConfigOrderByWithRelationInputSchema;
