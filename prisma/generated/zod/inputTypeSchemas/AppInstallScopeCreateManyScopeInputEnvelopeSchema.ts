import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeCreateManyScopeInputSchema } from './AppInstallScopeCreateManyScopeInputSchema';

export const AppInstallScopeCreateManyScopeInputEnvelopeSchema: z.ZodType<Prisma.AppInstallScopeCreateManyScopeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AppInstallScopeCreateManyScopeInputSchema),z.lazy(() => AppInstallScopeCreateManyScopeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AppInstallScopeCreateManyScopeInputEnvelopeSchema;
