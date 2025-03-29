import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeCreateWithoutAppInstallInputSchema } from './AppInstallScopeCreateWithoutAppInstallInputSchema';
import { AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema } from './AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema';
import { AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema } from './AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema';
import { AppInstallScopeUpsertWithWhereUniqueWithoutAppInstallInputSchema } from './AppInstallScopeUpsertWithWhereUniqueWithoutAppInstallInputSchema';
import { AppInstallScopeCreateManyAppInstallInputEnvelopeSchema } from './AppInstallScopeCreateManyAppInstallInputEnvelopeSchema';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';
import { AppInstallScopeUpdateWithWhereUniqueWithoutAppInstallInputSchema } from './AppInstallScopeUpdateWithWhereUniqueWithoutAppInstallInputSchema';
import { AppInstallScopeUpdateManyWithWhereWithoutAppInstallInputSchema } from './AppInstallScopeUpdateManyWithWhereWithoutAppInstallInputSchema';
import { AppInstallScopeScalarWhereInputSchema } from './AppInstallScopeScalarWhereInputSchema';

export const AppInstallScopeUncheckedUpdateManyWithoutAppInstallNestedInputSchema: z.ZodType<Prisma.AppInstallScopeUncheckedUpdateManyWithoutAppInstallNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallScopeCreateWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeCreateWithoutAppInstallInputSchema).array(),z.lazy(() => AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppInstallScopeUpsertWithWhereUniqueWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeUpsertWithWhereUniqueWithoutAppInstallInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppInstallScopeCreateManyAppInstallInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppInstallScopeUpdateWithWhereUniqueWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeUpdateWithWhereUniqueWithoutAppInstallInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppInstallScopeUpdateManyWithWhereWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeUpdateManyWithWhereWithoutAppInstallInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppInstallScopeScalarWhereInputSchema),z.lazy(() => AppInstallScopeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AppInstallScopeUncheckedUpdateManyWithoutAppInstallNestedInputSchema;
