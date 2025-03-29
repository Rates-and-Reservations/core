import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallCreateWithoutAppInstallScopeInputSchema } from './AppInstallCreateWithoutAppInstallScopeInputSchema';
import { AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema } from './AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema';

export const AppInstallCreateOrConnectWithoutAppInstallScopeInputSchema: z.ZodType<Prisma.AppInstallCreateOrConnectWithoutAppInstallScopeInput> = z.object({
  where: z.lazy(() => AppInstallWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppInstallCreateWithoutAppInstallScopeInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema) ]),
}).strict();

export default AppInstallCreateOrConnectWithoutAppInstallScopeInputSchema;
