import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppCreateWithoutAppInstallInputSchema } from './AppCreateWithoutAppInstallInputSchema';
import { AppUncheckedCreateWithoutAppInstallInputSchema } from './AppUncheckedCreateWithoutAppInstallInputSchema';
import { AppCreateOrConnectWithoutAppInstallInputSchema } from './AppCreateOrConnectWithoutAppInstallInputSchema';
import { AppUpsertWithoutAppInstallInputSchema } from './AppUpsertWithoutAppInstallInputSchema';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';
import { AppUpdateToOneWithWhereWithoutAppInstallInputSchema } from './AppUpdateToOneWithWhereWithoutAppInstallInputSchema';
import { AppUpdateWithoutAppInstallInputSchema } from './AppUpdateWithoutAppInstallInputSchema';
import { AppUncheckedUpdateWithoutAppInstallInputSchema } from './AppUncheckedUpdateWithoutAppInstallInputSchema';

export const AppUpdateOneRequiredWithoutAppInstallNestedInputSchema: z.ZodType<Prisma.AppUpdateOneRequiredWithoutAppInstallNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppCreateWithoutAppInstallInputSchema),z.lazy(() => AppUncheckedCreateWithoutAppInstallInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppCreateOrConnectWithoutAppInstallInputSchema).optional(),
  upsert: z.lazy(() => AppUpsertWithoutAppInstallInputSchema).optional(),
  connect: z.lazy(() => AppWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AppUpdateToOneWithWhereWithoutAppInstallInputSchema),z.lazy(() => AppUpdateWithoutAppInstallInputSchema),z.lazy(() => AppUncheckedUpdateWithoutAppInstallInputSchema) ]).optional(),
}).strict();

export default AppUpdateOneRequiredWithoutAppInstallNestedInputSchema;
