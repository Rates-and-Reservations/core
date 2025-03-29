import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';
import { AppInstallScopeCreateWithoutScopeInputSchema } from './AppInstallScopeCreateWithoutScopeInputSchema';
import { AppInstallScopeUncheckedCreateWithoutScopeInputSchema } from './AppInstallScopeUncheckedCreateWithoutScopeInputSchema';

export const AppInstallScopeCreateOrConnectWithoutScopeInputSchema: z.ZodType<Prisma.AppInstallScopeCreateOrConnectWithoutScopeInput> = z.object({
  where: z.lazy(() => AppInstallScopeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppInstallScopeCreateWithoutScopeInputSchema),z.lazy(() => AppInstallScopeUncheckedCreateWithoutScopeInputSchema) ]),
}).strict();

export default AppInstallScopeCreateOrConnectWithoutScopeInputSchema;
