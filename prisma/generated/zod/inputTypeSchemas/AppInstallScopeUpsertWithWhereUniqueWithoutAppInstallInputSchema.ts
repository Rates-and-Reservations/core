import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';
import { AppInstallScopeUpdateWithoutAppInstallInputSchema } from './AppInstallScopeUpdateWithoutAppInstallInputSchema';
import { AppInstallScopeUncheckedUpdateWithoutAppInstallInputSchema } from './AppInstallScopeUncheckedUpdateWithoutAppInstallInputSchema';
import { AppInstallScopeCreateWithoutAppInstallInputSchema } from './AppInstallScopeCreateWithoutAppInstallInputSchema';
import { AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema } from './AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema';

export const AppInstallScopeUpsertWithWhereUniqueWithoutAppInstallInputSchema: z.ZodType<Prisma.AppInstallScopeUpsertWithWhereUniqueWithoutAppInstallInput> = z.object({
  where: z.lazy(() => AppInstallScopeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppInstallScopeUpdateWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeUncheckedUpdateWithoutAppInstallInputSchema) ]),
  create: z.union([ z.lazy(() => AppInstallScopeCreateWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema) ]),
}).strict();

export default AppInstallScopeUpsertWithWhereUniqueWithoutAppInstallInputSchema;
