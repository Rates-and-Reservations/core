import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeCreateWithoutAppInstallInputSchema } from './AppInstallScopeCreateWithoutAppInstallInputSchema';
import { AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema } from './AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema';
import { AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema } from './AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema';
import { AppInstallScopeCreateManyAppInstallInputEnvelopeSchema } from './AppInstallScopeCreateManyAppInstallInputEnvelopeSchema';
import { AppInstallScopeWhereUniqueInputSchema } from './AppInstallScopeWhereUniqueInputSchema';

export const AppInstallScopeCreateNestedManyWithoutAppInstallInputSchema: z.ZodType<Prisma.AppInstallScopeCreateNestedManyWithoutAppInstallInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallScopeCreateWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeCreateWithoutAppInstallInputSchema).array(),z.lazy(() => AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeUncheckedCreateWithoutAppInstallInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema),z.lazy(() => AppInstallScopeCreateOrConnectWithoutAppInstallInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppInstallScopeCreateManyAppInstallInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppInstallScopeWhereUniqueInputSchema),z.lazy(() => AppInstallScopeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AppInstallScopeCreateNestedManyWithoutAppInstallInputSchema;
