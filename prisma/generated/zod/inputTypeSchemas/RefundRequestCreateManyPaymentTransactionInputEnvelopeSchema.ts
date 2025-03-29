import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateManyPaymentTransactionInputSchema } from './RefundRequestCreateManyPaymentTransactionInputSchema';

export const RefundRequestCreateManyPaymentTransactionInputEnvelopeSchema: z.ZodType<Prisma.RefundRequestCreateManyPaymentTransactionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RefundRequestCreateManyPaymentTransactionInputSchema),z.lazy(() => RefundRequestCreateManyPaymentTransactionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RefundRequestCreateManyPaymentTransactionInputEnvelopeSchema;
