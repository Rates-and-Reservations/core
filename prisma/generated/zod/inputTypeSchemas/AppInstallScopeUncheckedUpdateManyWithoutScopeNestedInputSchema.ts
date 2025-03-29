import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeCreateWithoutScopeInputSchema } from './AppInstallScopeCreateWithoutScopeInputSchema';
import { AppInstallScopeUncheckedCreateWithoutScopeInputSchema } from './AppInstallScopeUncheckedCreateWithoutScopeInputSchema';
import { AppInstallScopeCreateOrConnectWithoutScopeInputSchema } from './AppInstallScopeCreateOrConnectWithoutScopeInputSchema';
import { AppInstallScopeUpsertWithWhereUniqueWithoutScopeInputSchema } from './AppInstallScopeUpsertWithWhereUniqueWithoutScopeInputSchema';
import { AppInstallScopeCreateManyScopeInputEnvelopeSchema } from './AppInstallScopeCreateManyScopeInputEnvelopeSchema';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';
import { AppInstallScopeUpdateWithWhereUniqueWithoutScopeInputSchema } from './AppInstallScopeUpdateWithWhereUniqueWithoutScopeInputSchema';
import { AppInstallScopeUpdateManyWithWhereWithoutScopeInputSchema } from './AppInstallScopeUpdateManyWithWhereWithoutScopeInputSchema';
import { AppInstallScopeScalarWhereInputSchema } from './AppInstallScopeScalarWhereInputSchema';

export const AppInstallScopeUncheckedUpdateManyWithoutScopeNestedInputSchema: z.ZodType<Prisma.AppInstallScopeUncheckedUpdateManyWithoutScopeNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallScopeCreateWithoutScopeInputSchema),z.lazy(() => AppInstallScopeCreateWithoutScopeInputSchema).array(),z.lazy(() => AppInstallScopeUncheckedCreateWithoutScopeInputSchema),z.lazy(() => AppInstallScopeUncheckedCreateWithoutScopeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppInstallScopeCreateOrConnectWithoutScopeInputSchema),z.lazy(() => AppInstallScopeCreateOrConnectWithoutScopeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppInstallScopeUpsertWithWhereUniqueWithoutScopeInputSchema),z.lazy(() => AppInstallScopeUpsertWithWhereUniqueWithoutScopeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppInstallScopeCreateManyScopeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppInstallScopeUpdateWithWhereUniqueWithoutScopeInputSchema),z.lazy(() => AppInstallScopeUpdateWithWhereUniqueWithoutScopeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppInstallScopeUpdateManyWithWhereWithoutScopeInputSchema),z.lazy(() => AppInstallScopeUpdateManyWithWhereWithoutScopeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppInstallScopeScalarWhereInputSchema),z.lazy(() => AppInstallScopeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AppInstallScopeUncheckedUpdateManyWithoutScopeNestedInputSchema;
