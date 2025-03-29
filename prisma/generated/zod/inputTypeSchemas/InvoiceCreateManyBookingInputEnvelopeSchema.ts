import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateManyBookingInputSchema } from './InvoiceCreateManyBookingInputSchema';

export const InvoiceCreateManyBookingInputEnvelopeSchema: z.ZodType<Prisma.InvoiceCreateManyBookingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InvoiceCreateManyBookingInputSchema),z.lazy(() => InvoiceCreateManyBookingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default InvoiceCreateManyBookingInputEnvelopeSchema;
