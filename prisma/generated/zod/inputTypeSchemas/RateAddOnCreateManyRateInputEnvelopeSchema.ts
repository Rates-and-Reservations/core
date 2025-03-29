import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnCreateManyRateInputSchema } from './RateAddOnCreateManyRateInputSchema';

export const RateAddOnCreateManyRateInputEnvelopeSchema: z.ZodType<Prisma.RateAddOnCreateManyRateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RateAddOnCreateManyRateInputSchema),z.lazy(() => RateAddOnCreateManyRateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RateAddOnCreateManyRateInputEnvelopeSchema;
