import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppCreateManyMerchantInputSchema } from './AppCreateManyMerchantInputSchema';

export const AppCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.AppCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AppCreateManyMerchantInputSchema),z.lazy(() => AppCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AppCreateManyMerchantInputEnvelopeSchema;
