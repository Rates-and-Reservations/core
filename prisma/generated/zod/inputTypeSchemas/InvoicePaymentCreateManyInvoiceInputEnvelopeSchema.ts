import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentCreateManyInvoiceInputSchema } from './InvoicePaymentCreateManyInvoiceInputSchema';

export const InvoicePaymentCreateManyInvoiceInputEnvelopeSchema: z.ZodType<Prisma.InvoicePaymentCreateManyInvoiceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InvoicePaymentCreateManyInvoiceInputSchema),z.lazy(() => InvoicePaymentCreateManyInvoiceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default InvoicePaymentCreateManyInvoiceInputEnvelopeSchema;
