import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { CustomerOrderByWithRelationInputSchema } from './CustomerOrderByWithRelationInputSchema';
import { BookingRequestOrderByWithRelationInputSchema } from './BookingRequestOrderByWithRelationInputSchema';
import { PaymentActionsOrderByRelationAggregateInputSchema } from './PaymentActionsOrderByRelationAggregateInputSchema';
import { NotificationOrderByRelationAggregateInputSchema } from './NotificationOrderByRelationAggregateInputSchema';
import { InvoiceOrderByRelationAggregateInputSchema } from './InvoiceOrderByRelationAggregateInputSchema';
import { BookingActivityLogOrderByRelationAggregateInputSchema } from './BookingActivityLogOrderByRelationAggregateInputSchema';
import { RefundRequestOrderByRelationAggregateInputSchema } from './RefundRequestOrderByRelationAggregateInputSchema';
import { BookingItemOrderByRelationAggregateInputSchema } from './BookingItemOrderByRelationAggregateInputSchema';
import { BookingAddOnOrderByRelationAggregateInputSchema } from './BookingAddOnOrderByRelationAggregateInputSchema';
import { CancellationRequestOrderByRelationAggregateInputSchema } from './CancellationRequestOrderByRelationAggregateInputSchema';

export const BookingOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bookingRequestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  internalNotes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  customer: z.lazy(() => CustomerOrderByWithRelationInputSchema).optional(),
  bookingRequest: z.lazy(() => BookingRequestOrderByWithRelationInputSchema).optional(),
  PaymentActions: z.lazy(() => PaymentActionsOrderByRelationAggregateInputSchema).optional(),
  Notification: z.lazy(() => NotificationOrderByRelationAggregateInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceOrderByRelationAggregateInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogOrderByRelationAggregateInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestOrderByRelationAggregateInputSchema).optional(),
  BookingItem: z.lazy(() => BookingItemOrderByRelationAggregateInputSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnOrderByRelationAggregateInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestOrderByRelationAggregateInputSchema).optional()
}).strict();

export default BookingOrderByWithRelationInputSchema;
