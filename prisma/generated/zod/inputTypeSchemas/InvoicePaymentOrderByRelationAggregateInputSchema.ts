import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoicePaymentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InvoicePaymentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InvoicePaymentOrderByRelationAggregateInputSchema;
