import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { InvoiceCountOrderByAggregateInputSchema } from './InvoiceCountOrderByAggregateInputSchema';
import { InvoiceAvgOrderByAggregateInputSchema } from './InvoiceAvgOrderByAggregateInputSchema';
import { InvoiceMaxOrderByAggregateInputSchema } from './InvoiceMaxOrderByAggregateInputSchema';
import { InvoiceMinOrderByAggregateInputSchema } from './InvoiceMinOrderByAggregateInputSchema';
import { InvoiceSumOrderByAggregateInputSchema } from './InvoiceSumOrderByAggregateInputSchema';

export const InvoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.InvoiceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  invoiceNumber: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  taxAmount: z.lazy(() => SortOrderSchema).optional(),
  discountAmount: z.lazy(() => SortOrderSchema).optional(),
  totalAmount: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  issueDate: z.lazy(() => SortOrderSchema).optional(),
  dueDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  paidAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pdfUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InvoiceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InvoiceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InvoiceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InvoiceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InvoiceSumOrderByAggregateInputSchema).optional()
}).strict();

export default InvoiceOrderByWithAggregationInputSchema;
