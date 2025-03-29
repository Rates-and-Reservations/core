import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentWhereInputSchema } from './InvoicePaymentWhereInputSchema';

export const InvoicePaymentListRelationFilterSchema: z.ZodType<Prisma.InvoicePaymentListRelationFilter> = z.object({
  every: z.lazy(() => InvoicePaymentWhereInputSchema).optional(),
  some: z.lazy(() => InvoicePaymentWhereInputSchema).optional(),
  none: z.lazy(() => InvoicePaymentWhereInputSchema).optional()
}).strict();

export default InvoicePaymentListRelationFilterSchema;
