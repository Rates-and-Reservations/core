import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateManyResourceInputSchema } from './RateCreateManyResourceInputSchema';

export const RateCreateManyResourceInputEnvelopeSchema: z.ZodType<Prisma.RateCreateManyResourceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RateCreateManyResourceInputSchema),z.lazy(() => RateCreateManyResourceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RateCreateManyResourceInputEnvelopeSchema;
