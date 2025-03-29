import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { RateAddOnOrderByRelationAggregateInputSchema } from './RateAddOnOrderByRelationAggregateInputSchema';
import { BookingItemAddOnOrderByRelationAggregateInputSchema } from './BookingItemAddOnOrderByRelationAggregateInputSchema';
import { BookingAddOnOrderByRelationAggregateInputSchema } from './BookingAddOnOrderByRelationAggregateInputSchema';

export const AddOnOrderByWithRelationInputSchema: z.ZodType<Prisma.AddOnOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  showInBooking: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  RateAddOn: z.lazy(() => RateAddOnOrderByRelationAggregateInputSchema).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnOrderByRelationAggregateInputSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnOrderByRelationAggregateInputSchema).optional()
}).strict();

export default AddOnOrderByWithRelationInputSchema;
