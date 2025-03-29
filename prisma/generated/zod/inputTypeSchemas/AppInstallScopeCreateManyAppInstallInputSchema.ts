import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AppInstallScopeCreateManyAppInstallInputSchema: z.ZodType<Prisma.AppInstallScopeCreateManyAppInstallInput> = z.object({
  id: z.string().cuid().optional(),
  scopeId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default AppInstallScopeCreateManyAppInstallInputSchema;
