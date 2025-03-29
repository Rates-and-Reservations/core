import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateManyCustomerInputSchema } from './InvoiceCreateManyCustomerInputSchema';

export const InvoiceCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.InvoiceCreateManyCustomerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InvoiceCreateManyCustomerInputSchema),z.lazy(() => InvoiceCreateManyCustomerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default InvoiceCreateManyCustomerInputEnvelopeSchema;
