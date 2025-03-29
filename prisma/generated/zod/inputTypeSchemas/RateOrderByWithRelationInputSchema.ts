import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { ResourceOrderByWithRelationInputSchema } from './ResourceOrderByWithRelationInputSchema';
import { DiscountOrderByRelationAggregateInputSchema } from './DiscountOrderByRelationAggregateInputSchema';
import { RateAddOnOrderByRelationAggregateInputSchema } from './RateAddOnOrderByRelationAggregateInputSchema';
import { BookingRateSnapshotOrderByRelationAggregateInputSchema } from './BookingRateSnapshotOrderByRelationAggregateInputSchema';

export const RateOrderByWithRelationInputSchema: z.ZodType<Prisma.RateOrderByWithRelationInput> = z.object({
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
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  resource: z.lazy(() => ResourceOrderByWithRelationInputSchema).optional(),
  Discount: z.lazy(() => DiscountOrderByRelationAggregateInputSchema).optional(),
  RateAddOn: z.lazy(() => RateAddOnOrderByRelationAggregateInputSchema).optional(),
  BookingRateSnapshot: z.lazy(() => BookingRateSnapshotOrderByRelationAggregateInputSchema).optional()
}).strict();

export default RateOrderByWithRelationInputSchema;
