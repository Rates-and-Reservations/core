import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BookingOrderByWithRelationInputSchema } from './BookingOrderByWithRelationInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { RefundRequestOrderByRelationAggregateInputSchema } from './RefundRequestOrderByRelationAggregateInputSchema';
import { RefundLogOrderByRelationAggregateInputSchema } from './RefundLogOrderByRelationAggregateInputSchema';
import { InvoicePaymentOrderByRelationAggregateInputSchema } from './InvoicePaymentOrderByRelationAggregateInputSchema';

export const PaymentActionsOrderByWithRelationInputSchema: z.ZodType<Prisma.PaymentActionsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerPaymentId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  refundedAmount: z.lazy(() => SortOrderSchema).optional(),
  paymentMethod: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  booking: z.lazy(() => BookingOrderByWithRelationInputSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestOrderByRelationAggregateInputSchema).optional(),
  RefundLog: z.lazy(() => RefundLogOrderByRelationAggregateInputSchema).optional(),
  InvoicePayment: z.lazy(() => InvoicePaymentOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PaymentActionsOrderByWithRelationInputSchema;
