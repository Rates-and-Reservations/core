import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppWhereInputSchema } from './AppWhereInputSchema';
import { AppUpdateWithoutAppInstallInputSchema } from './AppUpdateWithoutAppInstallInputSchema';
import { AppUncheckedUpdateWithoutAppInstallInputSchema } from './AppUncheckedUpdateWithoutAppInstallInputSchema';

export const AppUpdateToOneWithWhereWithoutAppInstallInputSchema: z.ZodType<Prisma.AppUpdateToOneWithWhereWithoutAppInstallInput> = z.object({
  where: z.lazy(() => AppWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AppUpdateWithoutAppInstallInputSchema),z.lazy(() => AppUncheckedUpdateWithoutAppInstallInputSchema) ]),
}).strict();

export default AppUpdateToOneWithWhereWithoutAppInstallInputSchema;
