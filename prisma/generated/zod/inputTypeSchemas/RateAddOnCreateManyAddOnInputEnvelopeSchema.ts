import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnCreateManyAddOnInputSchema } from './RateAddOnCreateManyAddOnInputSchema';

export const RateAddOnCreateManyAddOnInputEnvelopeSchema: z.ZodType<Prisma.RateAddOnCreateManyAddOnInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RateAddOnCreateManyAddOnInputSchema),z.lazy(() => RateAddOnCreateManyAddOnInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RateAddOnCreateManyAddOnInputEnvelopeSchema;
