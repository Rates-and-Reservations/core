import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateWithoutAppInputSchema } from './AppInstallCreateWithoutAppInputSchema';
import { AppInstallUncheckedCreateWithoutAppInputSchema } from './AppInstallUncheckedCreateWithoutAppInputSchema';
import { AppInstallCreateOrConnectWithoutAppInputSchema } from './AppInstallCreateOrConnectWithoutAppInputSchema';
import { AppInstallCreateManyAppInputEnvelopeSchema } from './AppInstallCreateManyAppInputEnvelopeSchema';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';

export const AppInstallUncheckedCreateNestedManyWithoutAppInputSchema: z.ZodType<Prisma.AppInstallUncheckedCreateNestedManyWithoutAppInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallCreateWithoutAppInputSchema),z.lazy(() => AppInstallCreateWithoutAppInputSchema).array(),z.lazy(() => AppInstallUncheckedCreateWithoutAppInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutAppInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppInstallCreateOrConnectWithoutAppInputSchema),z.lazy(() => AppInstallCreateOrConnectWithoutAppInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppInstallCreateManyAppInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AppInstallUncheckedCreateNestedManyWithoutAppInputSchema;
