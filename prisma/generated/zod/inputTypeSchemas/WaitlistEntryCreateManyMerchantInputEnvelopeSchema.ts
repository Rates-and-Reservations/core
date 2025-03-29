import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryCreateManyMerchantInputSchema } from './WaitlistEntryCreateManyMerchantInputSchema';

export const WaitlistEntryCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.WaitlistEntryCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WaitlistEntryCreateManyMerchantInputSchema),z.lazy(() => WaitlistEntryCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WaitlistEntryCreateManyMerchantInputEnvelopeSchema;
