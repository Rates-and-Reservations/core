import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereInputSchema } from './AppInstallWhereInputSchema';
import { AppInstallUpdateWithoutAppInstallScopeInputSchema } from './AppInstallUpdateWithoutAppInstallScopeInputSchema';
import { AppInstallUncheckedUpdateWithoutAppInstallScopeInputSchema } from './AppInstallUncheckedUpdateWithoutAppInstallScopeInputSchema';

export const AppInstallUpdateToOneWithWhereWithoutAppInstallScopeInputSchema: z.ZodType<Prisma.AppInstallUpdateToOneWithWhereWithoutAppInstallScopeInput> = z.object({
  where: z.lazy(() => AppInstallWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AppInstallUpdateWithoutAppInstallScopeInputSchema),z.lazy(() => AppInstallUncheckedUpdateWithoutAppInstallScopeInputSchema) ]),
}).strict();

export default AppInstallUpdateToOneWithWhereWithoutAppInstallScopeInputSchema;
