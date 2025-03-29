import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';
import { AppInstallScopeCreateWithoutAppInstallInputSchema } from './AppInstallScopeCreateWithoutAppInstallInputSchema';
import { AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema } from './AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema';

export const AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema: z.ZodType<Prisma.AppInstallScopeCreateOrConnectWithoutAppInstallInput> = z.object({
  where: z.lazy(() => AppInstallScopeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppInstallScopeCreateWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema) ]),
}).strict();

export default AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema;
