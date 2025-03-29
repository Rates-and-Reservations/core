import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';
import { AppInstallScopeUpdateWithoutScopeInputSchema } from './AppInstallScopeUpdateWithoutScopeInputSchema';
import { AppInstallScopeUncheckedUpdateWithoutScopeInputSchema } from './AppInstallScopeUncheckedUpdateWithoutScopeInputSchema';

export const AppInstallScopeUpdateWithWhereUniqueWithoutScopeInputSchema: z.ZodType<Prisma.AppInstallScopeUpdateWithWhereUniqueWithoutScopeInput> = z.object({
  where: z.lazy(() => AppInstallScopeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppInstallScopeUpdateWithoutScopeInputSchema),z.lazy(() => AppInstallScopeUncheckedUpdateWithoutScopeInputSchema) ]),
}).strict();

export default AppInstallScopeUpdateWithWhereUniqueWithoutScopeInputSchema;
