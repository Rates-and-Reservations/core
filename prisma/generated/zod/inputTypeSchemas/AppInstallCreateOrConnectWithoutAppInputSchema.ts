import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallCreateWithoutAppInputSchema } from './AppInstallCreateWithoutAppInputSchema';
import { AppInstallUncheckedCreateWithoutAppInputSchema } from './AppInstallUncheckedCreateWithoutAppInputSchema';

export const AppInstallCreateOrConnectWithoutAppInputSchema: z.ZodType<Prisma.AppInstallCreateOrConnectWithoutAppInput> = z.object({
  where: z.lazy(() => AppInstallWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppInstallCreateWithoutAppInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutAppInputSchema) ]),
}).strict();

export default AppInstallCreateOrConnectWithoutAppInputSchema;
