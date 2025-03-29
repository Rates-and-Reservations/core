import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { InvoiceOrderByWithRelationInputSchema } from './InvoiceOrderByWithRelationInputSchema';
import { PaymentActionsOrderByWithRelationInputSchema } from './PaymentActionsOrderByWithRelationInputSchema';

export const InvoicePaymentOrderByWithRelationInputSchema: z.ZodType<Prisma.InvoicePaymentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  invoiceId: z.lazy(() => SortOrderSchema).optional(),
  paymentId: z.lazy(() => SortOrderSchema).optional(),
  amountPaid: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  invoice: z.lazy(() => InvoiceOrderByWithRelationInputSchema).optional(),
  payment: z.lazy(() => PaymentActionsOrderByWithRelationInputSchema).optional()
}).strict();

export default InvoicePaymentOrderByWithRelationInputSchema;
