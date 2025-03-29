import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { ResourceOrderByWithRelationInputSchema } from './ResourceOrderByWithRelationInputSchema';
import { CustomerOrderByWithRelationInputSchema } from './CustomerOrderByWithRelationInputSchema';

export const WaitlistEntryOrderByWithRelationInputSchema: z.ZodType<Prisma.WaitlistEntryOrderByWithRelationInput> = z.object({
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
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  resource: z.lazy(() => ResourceOrderByWithRelationInputSchema).optional(),
  customer: z.lazy(() => CustomerOrderByWithRelationInputSchema).optional()
}).strict();

export default WaitlistEntryOrderByWithRelationInputSchema;
