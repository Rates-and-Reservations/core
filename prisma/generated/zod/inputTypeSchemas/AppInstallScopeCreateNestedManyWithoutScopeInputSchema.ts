import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeCreateWithoutScopeInputSchema } from './AppInstallScopeCreateWithoutScopeInputSchema';
import { AppInstallScopeUncheckedCreateWithoutScopeInputSchema } from './AppInstallScopeUncheckedCreateWithoutScopeInputSchema';
import { AppInstallScopeCreateOrConnectWithoutScopeInputSchema } from './AppInstallScopeCreateOrConnectWithoutScopeInputSchema';
import { AppInstallScopeCreateManyScopeInputEnvelopeSchema } from './AppInstallScopeCreateManyScopeInputEnvelopeSchema';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';

export const AppInstallScopeCreateNestedManyWithoutScopeInputSchema: z.ZodType<Prisma.AppInstallScopeCreateNestedManyWithoutScopeInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallScopeCreateWithoutScopeInputSchema),z.lazy(() => AppInstallScopeCreateWithoutScopeInputSchema).array(),z.lazy(() => AppInstallScopeUncheckedCreateWithoutScopeInputSchema),z.lazy(() => AppInstallScopeUncheckedCreateWithoutScopeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppInstallScopeCreateOrConnectWithoutScopeInputSchema),z.lazy(() => AppInstallScopeCreateOrConnectWithoutScopeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppInstallScopeCreateManyScopeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AppInstallScopeCreateNestedManyWithoutScopeInputSchema;
