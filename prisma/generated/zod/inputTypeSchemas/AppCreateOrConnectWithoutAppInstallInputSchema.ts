import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';
import { AppCreateWithoutAppInstallInputSchema } from './AppCreateWithoutAppInstallInputSchema';
import { AppUncheckedCreateWithoutAppInstallInputSchema } from './AppUncheckedCreateWithoutAppInstallInputSchema';

export const AppCreateOrConnectWithoutAppInstallInputSchema: z.ZodType<Prisma.AppCreateOrConnectWithoutAppInstallInput> = z.object({
  where: z.lazy(() => AppWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppCreateWithoutAppInstallInputSchema),z.lazy(() => AppUncheckedCreateWithoutAppInstallInputSchema) ]),
}).strict();

export default AppCreateOrConnectWithoutAppInstallInputSchema;
