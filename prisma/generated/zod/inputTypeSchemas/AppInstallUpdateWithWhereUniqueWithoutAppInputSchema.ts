import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallUpdateWithoutAppInputSchema } from './AppInstallUpdateWithoutAppInputSchema';
import { AppInstallUncheckedUpdateWithoutAppInputSchema } from './AppInstallUncheckedUpdateWithoutAppInputSchema';

export const AppInstallUpdateWithWhereUniqueWithoutAppInputSchema: z.ZodType<Prisma.AppInstallUpdateWithWhereUniqueWithoutAppInput> = z.object({
  where: z.lazy(() => AppInstallWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppInstallUpdateWithoutAppInputSchema),z.lazy(() => AppInstallUncheckedUpdateWithoutAppInputSchema) ]),
}).strict();

export default AppInstallUpdateWithWhereUniqueWithoutAppInputSchema;
