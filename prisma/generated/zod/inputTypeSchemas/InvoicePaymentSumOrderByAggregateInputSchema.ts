import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoicePaymentSumOrderByAggregateInputSchema: z.ZodType<Prisma.InvoicePaymentSumOrderByAggregateInput> = z.object({
  amountPaid: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InvoicePaymentSumOrderByAggregateInputSchema;
