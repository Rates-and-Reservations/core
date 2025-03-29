import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeCreateManyAppInstallInputSchema } from './AppInstallScopeCreateManyAppInstallInputSchema';

export const AppInstallScopeCreateManyAppInstallInputEnvelopeSchema: z.ZodType<Prisma.AppInstallScopeCreateManyAppInstallInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AppInstallScopeCreateManyAppInstallInputSchema),z.lazy(() => AppInstallScopeCreateManyAppInstallInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AppInstallScopeCreateManyAppInstallInputEnvelopeSchema;
