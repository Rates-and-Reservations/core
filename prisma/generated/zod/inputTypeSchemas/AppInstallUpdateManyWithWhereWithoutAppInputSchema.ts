import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScalarWhereInputSchema } from './AppInstallScalarWhereInputSchema';
import { AppInstallUpdateManyMutationInputSchema } from './AppInstallUpdateManyMutationInputSchema';
import { AppInstallUncheckedUpdateManyWithoutAppInputSchema } from './AppInstallUncheckedUpdateManyWithoutAppInputSchema';

export const AppInstallUpdateManyWithWhereWithoutAppInputSchema: z.ZodType<Prisma.AppInstallUpdateManyWithWhereWithoutAppInput> = z.object({
  where: z.lazy(() => AppInstallScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppInstallUpdateManyMutationInputSchema),z.lazy(() => AppInstallUncheckedUpdateManyWithoutAppInputSchema) ]),
}).strict();

export default AppInstallUpdateManyWithWhereWithoutAppInputSchema;
