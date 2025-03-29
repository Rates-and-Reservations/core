import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateManyMerchantInputSchema } from './AppInstallCreateManyMerchantInputSchema';

export const AppInstallCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.AppInstallCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AppInstallCreateManyMerchantInputSchema),z.lazy(() => AppInstallCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AppInstallCreateManyMerchantInputEnvelopeSchema;
