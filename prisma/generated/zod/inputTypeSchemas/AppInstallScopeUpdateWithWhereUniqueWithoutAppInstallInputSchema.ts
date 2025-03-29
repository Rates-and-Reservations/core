import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';
import { AppInstallScopeUpdateWithoutAppInstallInputSchema } from './AppInstallScopeUpdateWithoutAppInstallInputSchema';
import { AppInstallScopeUncheckedUpdateWithoutAppInstallInputSchema } from './AppInstallScopeUncheckedUpdateWithoutAppInstallInputSchema';

export const AppInstallScopeUpdateWithWhereUniqueWithoutAppInstallInputSchema: z.ZodType<Prisma.AppInstallScopeUpdateWithWhereUniqueWithoutAppInstallInput> = z.object({
  where: z.lazy(() => AppInstallScopeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppInstallScopeUpdateWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeUncheckedUpdateWithoutAppInstallInputSchema) ]),
}).strict();

export default AppInstallScopeUpdateWithWhereUniqueWithoutAppInstallInputSchema;
