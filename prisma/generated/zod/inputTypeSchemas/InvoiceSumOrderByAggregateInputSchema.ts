import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceSumOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceSumOrderByAggregateInput> = z.object({
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  taxAmount: z.lazy(() => SortOrderSchema).optional(),
  discountAmount: z.lazy(() => SortOrderSchema).optional(),
  totalAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InvoiceSumOrderByAggregateInputSchema;
