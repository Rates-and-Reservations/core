import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppScopeWhereUniqueInputSchema } from './AppScopeWhereUniqueInputSchema';
import { AppScopeCreateWithoutAppInstallScopeInputSchema } from './AppScopeCreateWithoutAppInstallScopeInputSchema';
import { AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema } from './AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema';

export const AppScopeCreateOrConnectWithoutAppInstallScopeInputSchema: z.ZodType<Prisma.AppScopeCreateOrConnectWithoutAppInstallScopeInput> = z.object({
  where: z.lazy(() => AppScopeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppScopeCreateWithoutAppInstallScopeInputSchema),z.lazy(() => AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema) ]),
}).strict();

export default AppScopeCreateOrConnectWithoutAppInstallScopeInputSchema;
