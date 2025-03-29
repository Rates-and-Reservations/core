import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { NotificationOrderByRelationAggregateInputSchema } from './NotificationOrderByRelationAggregateInputSchema';
import { WaitlistEntryOrderByRelationAggregateInputSchema } from './WaitlistEntryOrderByRelationAggregateInputSchema';
import { InvoiceOrderByRelationAggregateInputSchema } from './InvoiceOrderByRelationAggregateInputSchema';
import { BookingRequestOrderByRelationAggregateInputSchema } from './BookingRequestOrderByRelationAggregateInputSchema';
import { BookingOrderByRelationAggregateInputSchema } from './BookingOrderByRelationAggregateInputSchema';

export const CustomerOrderByWithRelationInputSchema: z.ZodType<Prisma.CustomerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postcode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  Notification: z.lazy(() => NotificationOrderByRelationAggregateInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryOrderByRelationAggregateInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceOrderByRelationAggregateInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestOrderByRelationAggregateInputSchema).optional(),
  Booking: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional()
}).strict();

export default CustomerOrderByWithRelationInputSchema;
