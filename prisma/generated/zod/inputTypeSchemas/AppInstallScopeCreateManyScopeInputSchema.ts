import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AppInstallScopeCreateManyScopeInputSchema: z.ZodType<Prisma.AppInstallScopeCreateManyScopeInput> = z.object({
  id: z.string().cuid().optional(),
  appInstallId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default AppInstallScopeCreateManyScopeInputSchema;
