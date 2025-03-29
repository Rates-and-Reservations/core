import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PaymentActionsCountOrderByAggregateInputSchema } from './PaymentActionsCountOrderByAggregateInputSchema';
import { PaymentActionsAvgOrderByAggregateInputSchema } from './PaymentActionsAvgOrderByAggregateInputSchema';
import { PaymentActionsMaxOrderByAggregateInputSchema } from './PaymentActionsMaxOrderByAggregateInputSchema';
import { PaymentActionsMinOrderByAggregateInputSchema } from './PaymentActionsMinOrderByAggregateInputSchema';
import { PaymentActionsSumOrderByAggregateInputSchema } from './PaymentActionsSumOrderByAggregateInputSchema';

export const PaymentActionsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentActionsOrderByWithAggregationInput> = z.object({
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
  _count: z.lazy(() => PaymentActionsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PaymentActionsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PaymentActionsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PaymentActionsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PaymentActionsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PaymentActionsOrderByWithAggregationInputSchema;
