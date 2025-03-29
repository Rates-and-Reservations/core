import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryCreateManyResourceInputSchema } from './WaitlistEntryCreateManyResourceInputSchema';

export const WaitlistEntryCreateManyResourceInputEnvelopeSchema: z.ZodType<Prisma.WaitlistEntryCreateManyResourceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WaitlistEntryCreateManyResourceInputSchema),z.lazy(() => WaitlistEntryCreateManyResourceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WaitlistEntryCreateManyResourceInputEnvelopeSchema;
