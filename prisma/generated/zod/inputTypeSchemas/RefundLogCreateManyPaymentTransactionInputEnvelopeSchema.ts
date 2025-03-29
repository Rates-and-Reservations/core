import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogCreateManyPaymentTransactionInputSchema } from './RefundLogCreateManyPaymentTransactionInputSchema';

export const RefundLogCreateManyPaymentTransactionInputEnvelopeSchema: z.ZodType<Prisma.RefundLogCreateManyPaymentTransactionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RefundLogCreateManyPaymentTransactionInputSchema),z.lazy(() => RefundLogCreateManyPaymentTransactionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RefundLogCreateManyPaymentTransactionInputEnvelopeSchema;
