import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';

export const InvoiceScalarRelationFilterSchema: z.ZodType<Prisma.InvoiceScalarRelationFilter> = z.object({
  is: z.lazy(() => InvoiceWhereInputSchema).optional(),
  isNot: z.lazy(() => InvoiceWhereInputSchema).optional()
}).strict();

export default InvoiceScalarRelationFilterSchema;
