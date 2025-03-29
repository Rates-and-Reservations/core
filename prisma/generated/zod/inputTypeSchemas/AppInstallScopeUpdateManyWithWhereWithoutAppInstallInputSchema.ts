import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeScalarWhereInputSchema } from './AppInstallScopeScalarWhereInputSchema';
import { AppInstallScopeUpdateManyMutationInputSchema } from './AppInstallScopeUpdateManyMutationInputSchema';
import { AppInstallScopeUncheckedUpdateManyWithoutAppInstallInputSchema } from './AppInstallScopeUncheckedUpdateManyWithoutAppInstallInputSchema';

export const AppInstallScopeUpdateManyWithWhereWithoutAppInstallInputSchema: z.ZodType<Prisma.AppInstallScopeUpdateManyWithWhereWithoutAppInstallInput> = z.object({
  where: z.lazy(() => AppInstallScopeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppInstallScopeUpdateManyMutationInputSchema),z.lazy(() => AppInstallScopeUncheckedUpdateManyWithoutAppInstallInputSchema) ]),
}).strict();

export default AppInstallScopeUpdateManyWithWhereWithoutAppInstallInputSchema;
