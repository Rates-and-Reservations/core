import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { InvoicePaymentCountOrderByAggregateInputSchema } from './InvoicePaymentCountOrderByAggregateInputSchema';
import { InvoicePaymentAvgOrderByAggregateInputSchema } from './InvoicePaymentAvgOrderByAggregateInputSchema';
import { InvoicePaymentMaxOrderByAggregateInputSchema } from './InvoicePaymentMaxOrderByAggregateInputSchema';
import { InvoicePaymentMinOrderByAggregateInputSchema } from './InvoicePaymentMinOrderByAggregateInputSchema';
import { InvoicePaymentSumOrderByAggregateInputSchema } from './InvoicePaymentSumOrderByAggregateInputSchema';

export const InvoicePaymentOrderByWithAggregationInputSchema: z.ZodType<Prisma.InvoicePaymentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  invoiceId: z.lazy(() => SortOrderSchema).optional(),
  paymentId: z.lazy(() => SortOrderSchema).optional(),
  amountPaid: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InvoicePaymentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InvoicePaymentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InvoicePaymentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InvoicePaymentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InvoicePaymentSumOrderByAggregateInputSchema).optional()
}).strict();

export default InvoicePaymentOrderByWithAggregationInputSchema;
