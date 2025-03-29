import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppScopeUpdateWithoutAppInstallScopeInputSchema } from './AppScopeUpdateWithoutAppInstallScopeInputSchema';
import { AppScopeUncheckedUpdateWithoutAppInstallScopeInputSchema } from './AppScopeUncheckedUpdateWithoutAppInstallScopeInputSchema';
import { AppScopeCreateWithoutAppInstallScopeInputSchema } from './AppScopeCreateWithoutAppInstallScopeInputSchema';
import { AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema } from './AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema';
import { AppScopeWhereInputSchema } from './AppScopeWhereInputSchema';

export const AppScopeUpsertWithoutAppInstallScopeInputSchema: z.ZodType<Prisma.AppScopeUpsertWithoutAppInstallScopeInput> = z.object({
  update: z.union([ z.lazy(() => AppScopeUpdateWithoutAppInstallScopeInputSchema),z.lazy(() => AppScopeUncheckedUpdateWithoutAppInstallScopeInputSchema) ]),
  create: z.union([ z.lazy(() => AppScopeCreateWithoutAppInstallScopeInputSchema),z.lazy(() => AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema) ]),
  where: z.lazy(() => AppScopeWhereInputSchema).optional()
}).strict();

export default AppScopeUpsertWithoutAppInstallScopeInputSchema;
