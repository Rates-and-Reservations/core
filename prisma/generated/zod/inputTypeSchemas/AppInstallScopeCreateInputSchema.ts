import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateNestedOneWithoutAppInstallScopeInputSchema } from './AppInstallCreateNestedOneWithoutAppInstallScopeInputSchema';
import { AppScopeCreateNestedOneWithoutAppInstallScopeInputSchema } from './AppScopeCreateNestedOneWithoutAppInstallScopeInputSchema';

export const AppInstallScopeCreateInputSchema: z.ZodType<Prisma.AppInstallScopeCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  appInstall: z.lazy(() => AppInstallCreateNestedOneWithoutAppInstallScopeInputSchema),
  scope: z.lazy(() => AppScopeCreateNestedOneWithoutAppInstallScopeInputSchema)
}).strict();

export default AppInstallScopeCreateInputSchema;
