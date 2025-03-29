import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AppInstallScopeUncheckedCreateInputSchema: z.ZodType<Prisma.AppInstallScopeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  appInstallId: z.string(),
  scopeId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default AppInstallScopeUncheckedCreateInputSchema;
