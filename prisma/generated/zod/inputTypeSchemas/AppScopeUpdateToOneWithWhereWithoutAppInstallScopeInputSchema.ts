import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppScopeWhereInputSchema } from './AppScopeWhereInputSchema';
import { AppScopeUpdateWithoutAppInstallScopeInputSchema } from './AppScopeUpdateWithoutAppInstallScopeInputSchema';
import { AppScopeUncheckedUpdateWithoutAppInstallScopeInputSchema } from './AppScopeUncheckedUpdateWithoutAppInstallScopeInputSchema';

export const AppScopeUpdateToOneWithWhereWithoutAppInstallScopeInputSchema: z.ZodType<Prisma.AppScopeUpdateToOneWithWhereWithoutAppInstallScopeInput> = z.object({
  where: z.lazy(() => AppScopeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AppScopeUpdateWithoutAppInstallScopeInputSchema),z.lazy(() => AppScopeUncheckedUpdateWithoutAppInstallScopeInputSchema) ]),
}).strict();

export default AppScopeUpdateToOneWithWhereWithoutAppInstallScopeInputSchema;
