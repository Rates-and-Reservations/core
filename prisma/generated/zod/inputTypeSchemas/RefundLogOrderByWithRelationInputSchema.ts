import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RefundRequestOrderByWithRelationInputSchema } from './RefundRequestOrderByWithRelationInputSchema';
import { PaymentActionsOrderByWithRelationInputSchema } from './PaymentActionsOrderByWithRelationInputSchema';

export const RefundLogOrderByWithRelationInputSchema: z.ZodType<Prisma.RefundLogOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  refundRequestId: z.lazy(() => SortOrderSchema).optional(),
  paymentTransactionId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerRefundId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  processedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  refundRequest: z.lazy(() => RefundRequestOrderByWithRelationInputSchema).optional(),
  paymentTransaction: z.lazy(() => PaymentActionsOrderByWithRelationInputSchema).optional()
}).strict();

export default RefundLogOrderByWithRelationInputSchema;
