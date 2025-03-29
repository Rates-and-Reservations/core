import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenCreateManyMerchantInputSchema } from './OAuthTokenCreateManyMerchantInputSchema';

export const OAuthTokenCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.OAuthTokenCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OAuthTokenCreateManyMerchantInputSchema),z.lazy(() => OAuthTokenCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OAuthTokenCreateManyMerchantInputEnvelopeSchema;
