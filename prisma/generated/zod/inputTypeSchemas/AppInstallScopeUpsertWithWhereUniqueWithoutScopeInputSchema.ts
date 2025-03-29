import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';
import { AppInstallScopeUpdateWithoutScopeInputSchema } from './AppInstallScopeUpdateWithoutScopeInputSchema';
import { AppInstallScopeUncheckedUpdateWithoutScopeInputSchema } from './AppInstallScopeUncheckedUpdateWithoutScopeInputSchema';
import { AppInstallScopeCreateWithoutScopeInputSchema } from './AppInstallScopeCreateWithoutScopeInputSchema';
import { AppInstallScopeUncheckedCreateWithoutScopeInputSchema } from './AppInstallScopeUncheckedCreateWithoutScopeInputSchema';

export const AppInstallScopeUpsertWithWhereUniqueWithoutScopeInputSchema: z.ZodType<Prisma.AppInstallScopeUpsertWithWhereUniqueWithoutScopeInput> = z.object({
  where: z.lazy(() => AppInstallScopeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppInstallScopeUpdateWithoutScopeInputSchema),z.lazy(() => AppInstallScopeUncheckedUpdateWithoutScopeInputSchema) ]),
  create: z.union([ z.lazy(() => AppInstallScopeCreateWithoutScopeInputSchema),z.lazy(() => AppInstallScopeUncheckedCreateWithoutScopeInputSchema) ]),
}).strict();

export default AppInstallScopeUpsertWithWhereUniqueWithoutScopeInputSchema;
