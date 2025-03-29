import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallUpdateWithoutAppInstallScopeInputSchema } from './AppInstallUpdateWithoutAppInstallScopeInputSchema';
import { AppInstallUncheckedUpdateWithoutAppInstallScopeInputSchema } from './AppInstallUncheckedUpdateWithoutAppInstallScopeInputSchema';
import { AppInstallCreateWithoutAppInstallScopeInputSchema } from './AppInstallCreateWithoutAppInstallScopeInputSchema';
import { AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema } from './AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema';
import { AppInstallWhereInputSchema } from './AppInstallWhereInputSchema';

export const AppInstallUpsertWithoutAppInstallScopeInputSchema: z.ZodType<Prisma.AppInstallUpsertWithoutAppInstallScopeInput> = z.object({
  update: z.union([ z.lazy(() => AppInstallUpdateWithoutAppInstallScopeInputSchema),z.lazy(() => AppInstallUncheckedUpdateWithoutAppInstallScopeInputSchema) ]),
  create: z.union([ z.lazy(() => AppInstallCreateWithoutAppInstallScopeInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema) ]),
  where: z.lazy(() => AppInstallWhereInputSchema).optional()
}).strict();

export default AppInstallUpsertWithoutAppInstallScopeInputSchema;
