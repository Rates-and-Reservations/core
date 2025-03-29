import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestCreateManyBookingInputSchema } from './CancellationRequestCreateManyBookingInputSchema';

export const CancellationRequestCreateManyBookingInputEnvelopeSchema: z.ZodType<Prisma.CancellationRequestCreateManyBookingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CancellationRequestCreateManyBookingInputSchema),z.lazy(() => CancellationRequestCreateManyBookingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CancellationRequestCreateManyBookingInputEnvelopeSchema;
