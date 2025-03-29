import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateManyMerchantInputSchema } from './InvoiceCreateManyMerchantInputSchema';

export const InvoiceCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.InvoiceCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InvoiceCreateManyMerchantInputSchema),z.lazy(() => InvoiceCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default InvoiceCreateManyMerchantInputEnvelopeSchema;
