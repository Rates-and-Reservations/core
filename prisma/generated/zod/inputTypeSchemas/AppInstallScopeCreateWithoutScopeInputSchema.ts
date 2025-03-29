import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateNestedOneWithoutAppInstallScopeInputSchema } from './AppInstallCreateNestedOneWithoutAppInstallScopeInputSchema';

export const AppInstallScopeCreateWithoutScopeInputSchema: z.ZodType<Prisma.AppInstallScopeCreateWithoutScopeInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  appInstall: z.lazy(() => AppInstallCreateNestedOneWithoutAppInstallScopeInputSchema)
}).strict();

export default AppInstallScopeCreateWithoutScopeInputSchema;
