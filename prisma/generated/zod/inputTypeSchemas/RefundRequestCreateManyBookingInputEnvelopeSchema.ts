import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateManyBookingInputSchema } from './RefundRequestCreateManyBookingInputSchema';

export const RefundRequestCreateManyBookingInputEnvelopeSchema: z.ZodType<Prisma.RefundRequestCreateManyBookingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RefundRequestCreateManyBookingInputSchema),z.lazy(() => RefundRequestCreateManyBookingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RefundRequestCreateManyBookingInputEnvelopeSchema;
