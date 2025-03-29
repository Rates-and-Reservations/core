import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogCreateManyRefundRequestInputSchema } from './RefundLogCreateManyRefundRequestInputSchema';

export const RefundLogCreateManyRefundRequestInputEnvelopeSchema: z.ZodType<Prisma.RefundLogCreateManyRefundRequestInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RefundLogCreateManyRefundRequestInputSchema),z.lazy(() => RefundLogCreateManyRefundRequestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RefundLogCreateManyRefundRequestInputEnvelopeSchema;
