import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AppInstallScopeCreateManyInputSchema: z.ZodType<Prisma.AppInstallScopeCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  appInstallId: z.string(),
  scopeId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default AppInstallScopeCreateManyInputSchema;
