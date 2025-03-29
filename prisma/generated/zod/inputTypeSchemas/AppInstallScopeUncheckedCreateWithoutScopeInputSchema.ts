import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AppInstallScopeUncheckedCreateWithoutScopeInputSchema: z.ZodType<Prisma.AppInstallScopeUncheckedCreateWithoutScopeInput> = z.object({
  id: z.string().cuid().optional(),
  appInstallId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default AppInstallScopeUncheckedCreateWithoutScopeInputSchema;
