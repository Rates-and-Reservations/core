import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryCreateManyCustomerInputSchema } from './WaitlistEntryCreateManyCustomerInputSchema';

export const WaitlistEntryCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.WaitlistEntryCreateManyCustomerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WaitlistEntryCreateManyCustomerInputSchema),z.lazy(() => WaitlistEntryCreateManyCustomerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WaitlistEntryCreateManyCustomerInputEnvelopeSchema;
