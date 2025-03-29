import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyCreateManyMerchantInputSchema } from './CancellationPolicyCreateManyMerchantInputSchema';

export const CancellationPolicyCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.CancellationPolicyCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CancellationPolicyCreateManyMerchantInputSchema),z.lazy(() => CancellationPolicyCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CancellationPolicyCreateManyMerchantInputEnvelopeSchema;
