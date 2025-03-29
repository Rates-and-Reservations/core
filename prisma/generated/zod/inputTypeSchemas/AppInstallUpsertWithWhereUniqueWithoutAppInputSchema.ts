import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallUpdateWithoutAppInputSchema } from './AppInstallUpdateWithoutAppInputSchema';
import { AppInstallUncheckedUpdateWithoutAppInputSchema } from './AppInstallUncheckedUpdateWithoutAppInputSchema';
import { AppInstallCreateWithoutAppInputSchema } from './AppInstallCreateWithoutAppInputSchema';
import { AppInstallUncheckedCreateWithoutAppInputSchema } from './AppInstallUncheckedCreateWithoutAppInputSchema';

export const AppInstallUpsertWithWhereUniqueWithoutAppInputSchema: z.ZodType<Prisma.AppInstallUpsertWithWhereUniqueWithoutAppInput> = z.object({
  where: z.lazy(() => AppInstallWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppInstallUpdateWithoutAppInputSchema),z.lazy(() => AppInstallUncheckedUpdateWithoutAppInputSchema) ]),
  create: z.union([ z.lazy(() => AppInstallCreateWithoutAppInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutAppInputSchema) ]),
}).strict();

export default AppInstallUpsertWithWhereUniqueWithoutAppInputSchema;
