import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentCreateManyPaymentInputSchema } from './InvoicePaymentCreateManyPaymentInputSchema';

export const InvoicePaymentCreateManyPaymentInputEnvelopeSchema: z.ZodType<Prisma.InvoicePaymentCreateManyPaymentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InvoicePaymentCreateManyPaymentInputSchema),z.lazy(() => InvoicePaymentCreateManyPaymentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default InvoicePaymentCreateManyPaymentInputEnvelopeSchema;
