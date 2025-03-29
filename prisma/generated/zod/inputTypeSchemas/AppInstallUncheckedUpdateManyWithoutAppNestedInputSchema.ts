import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateWithoutAppInputSchema } from './AppInstallCreateWithoutAppInputSchema';
import { AppInstallUncheckedCreateWithoutAppInputSchema } from './AppInstallUncheckedCreateWithoutAppInputSchema';
import { AppInstallCreateOrConnectWithoutAppInputSchema } from './AppInstallCreateOrConnectWithoutAppInputSchema';
import { AppInstallUpsertWithWhereUniqueWithoutAppInputSchema } from './AppInstallUpsertWithWhereUniqueWithoutAppInputSchema';
import { AppInstallCreateManyAppInputEnvelopeSchema } from './AppInstallCreateManyAppInputEnvelopeSchema';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallUpdateWithWhereUniqueWithoutAppInputSchema } from './AppInstallUpdateWithWhereUniqueWithoutAppInputSchema';
import { AppInstallUpdateManyWithWhereWithoutAppInputSchema } from './AppInstallUpdateManyWithWhereWithoutAppInputSchema';
import { AppInstallScalarWhereInputSchema } from './AppInstallScalarWhereInputSchema';

export const AppInstallUncheckedUpdateManyWithoutAppNestedInputSchema: z.ZodType<Prisma.AppInstallUncheckedUpdateManyWithoutAppNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallCreateWithoutAppInputSchema),z.lazy(() => AppInstallCreateWithoutAppInputSchema).array(),z.lazy(() => AppInstallUncheckedCreateWithoutAppInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutAppInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppInstallCreateOrConnectWithoutAppInputSchema),z.lazy(() => AppInstallCreateOrConnectWithoutAppInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppInstallUpsertWithWhereUniqueWithoutAppInputSchema),z.lazy(() => AppInstallUpsertWithWhereUniqueWithoutAppInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppInstallCreateManyAppInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppInstallUpdateWithWhereUniqueWithoutAppInputSchema),z.lazy(() => AppInstallUpdateWithWhereUniqueWithoutAppInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppInstallUpdateManyWithWhereWithoutAppInputSchema),z.lazy(() => AppInstallUpdateManyWithWhereWithoutAppInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppInstallScalarWhereInputSchema),z.lazy(() => AppInstallScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AppInstallUncheckedUpdateManyWithoutAppNestedInputSchema;
