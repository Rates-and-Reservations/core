import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { CustomerOrderByWithRelationInputSchema } from './CustomerOrderByWithRelationInputSchema';
import { ResourceOrderByWithRelationInputSchema } from './ResourceOrderByWithRelationInputSchema';
import { BookingTemplateOrderByWithRelationInputSchema } from './BookingTemplateOrderByWithRelationInputSchema';
import { BookingRequestFlowOrderByRelationAggregateInputSchema } from './BookingRequestFlowOrderByRelationAggregateInputSchema';
import { BookingRequestActionValueOrderByRelationAggregateInputSchema } from './BookingRequestActionValueOrderByRelationAggregateInputSchema';
import { BookingOrderByRelationAggregateInputSchema } from './BookingOrderByRelationAggregateInputSchema';

export const BookingRequestOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingRequestOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  prefilledFields: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  resourceId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  templateId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  actionStatus: z.lazy(() => SortOrderSchema).optional(),
  finalizedSnapshot: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  customer: z.lazy(() => CustomerOrderByWithRelationInputSchema).optional(),
  resource: z.lazy(() => ResourceOrderByWithRelationInputSchema).optional(),
  template: z.lazy(() => BookingTemplateOrderByWithRelationInputSchema).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowOrderByRelationAggregateInputSchema).optional(),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueOrderByRelationAggregateInputSchema).optional(),
  Booking: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional()
}).strict();

export default BookingRequestOrderByWithRelationInputSchema;
