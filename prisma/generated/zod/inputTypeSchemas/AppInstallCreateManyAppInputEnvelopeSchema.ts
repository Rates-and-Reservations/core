import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateManyAppInputSchema } from './AppInstallCreateManyAppInputSchema';

export const AppInstallCreateManyAppInputEnvelopeSchema: z.ZodType<Prisma.AppInstallCreateManyAppInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AppInstallCreateManyAppInputSchema),z.lazy(() => AppInstallCreateManyAppInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AppInstallCreateManyAppInputEnvelopeSchema;
