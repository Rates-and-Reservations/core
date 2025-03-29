import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { ResourceBookingConfigOrderByRelationAggregateInputSchema } from './ResourceBookingConfigOrderByRelationAggregateInputSchema';

export const CancellationPolicyOrderByWithRelationInputSchema: z.ZodType<Prisma.CancellationPolicyOrderByWithRelationInput> = z.object({
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
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigOrderByRelationAggregateInputSchema).optional()
}).strict();

export default CancellationPolicyOrderByWithRelationInputSchema;
