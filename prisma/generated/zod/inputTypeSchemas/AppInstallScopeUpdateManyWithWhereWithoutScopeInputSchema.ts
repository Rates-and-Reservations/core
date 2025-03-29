import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeScalarWhereInputSchema } from './AppInstallScopeScalarWhereInputSchema';
import { AppInstallScopeUpdateManyMutationInputSchema } from './AppInstallScopeUpdateManyMutationInputSchema';
import { AppInstallScopeUncheckedUpdateManyWithoutScopeInputSchema } from './AppInstallScopeUncheckedUpdateManyWithoutScopeInputSchema';

export const AppInstallScopeUpdateManyWithWhereWithoutScopeInputSchema: z.ZodType<Prisma.AppInstallScopeUpdateManyWithWhereWithoutScopeInput> = z.object({
  where: z.lazy(() => AppInstallScopeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppInstallScopeUpdateManyMutationInputSchema),z.lazy(() => AppInstallScopeUncheckedUpdateManyWithoutScopeInputSchema) ]),
}).strict();

export default AppInstallScopeUpdateManyWithWhereWithoutScopeInputSchema;
