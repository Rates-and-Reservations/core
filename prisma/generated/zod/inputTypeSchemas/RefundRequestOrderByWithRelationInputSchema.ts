import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { BookingOrderByWithRelationInputSchema } from './BookingOrderByWithRelationInputSchema';
import { PaymentActionsOrderByWithRelationInputSchema } from './PaymentActionsOrderByWithRelationInputSchema';
import { RefundLogOrderByRelationAggregateInputSchema } from './RefundLogOrderByRelationAggregateInputSchema';

export const RefundRequestOrderByWithRelationInputSchema: z.ZodType<Prisma.RefundRequestOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  paymentTransactionId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  reason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rejectedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requestedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  requestedAt: z.lazy(() => SortOrderSchema).optional(),
  processedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  booking: z.lazy(() => BookingOrderByWithRelationInputSchema).optional(),
  paymentTransaction: z.lazy(() => PaymentActionsOrderByWithRelationInputSchema).optional(),
  RefundLog: z.lazy(() => RefundLogOrderByRelationAggregateInputSchema).optional()
}).strict();

export default RefundRequestOrderByWithRelationInputSchema;
