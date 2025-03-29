import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestCreateManyBookingItemInputSchema } from './CancellationRequestCreateManyBookingItemInputSchema';

export const CancellationRequestCreateManyBookingItemInputEnvelopeSchema: z.ZodType<Prisma.CancellationRequestCreateManyBookingItemInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CancellationRequestCreateManyBookingItemInputSchema),z.lazy(() => CancellationRequestCreateManyBookingItemInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CancellationRequestCreateManyBookingItemInputEnvelopeSchema;
