import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppUpdateWithoutAppInstallInputSchema } from './AppUpdateWithoutAppInstallInputSchema';
import { AppUncheckedUpdateWithoutAppInstallInputSchema } from './AppUncheckedUpdateWithoutAppInstallInputSchema';
import { AppCreateWithoutAppInstallInputSchema } from './AppCreateWithoutAppInstallInputSchema';
import { AppUncheckedCreateWithoutAppInstallInputSchema } from './AppUncheckedCreateWithoutAppInstallInputSchema';
import { AppWhereInputSchema } from './AppWhereInputSchema';

export const AppUpsertWithoutAppInstallInputSchema: z.ZodType<Prisma.AppUpsertWithoutAppInstallInput> = z.object({
  update: z.union([ z.lazy(() => AppUpdateWithoutAppInstallInputSchema),z.lazy(() => AppUncheckedUpdateWithoutAppInstallInputSchema) ]),
  create: z.union([ z.lazy(() => AppCreateWithoutAppInstallInputSchema),z.lazy(() => AppUncheckedCreateWithoutAppInstallInputSchema) ]),
  where: z.lazy(() => AppWhereInputSchema).optional()
}).strict();

export default AppUpsertWithoutAppInstallInputSchema;
