import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeUncheckedCreateNestedManyWithoutScopeInputSchema } from './AppInstallScopeUncheckedCreateNestedManyWithoutScopeInputSchema';

export const AppScopeUncheckedCreateInputSchema: z.ZodType<Prisma.AppScopeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  AppInstallScope: z.lazy(() => AppInstallScopeUncheckedCreateNestedManyWithoutScopeInputSchema).optional()
}).strict();

export default AppScopeUncheckedCreateInputSchema;
