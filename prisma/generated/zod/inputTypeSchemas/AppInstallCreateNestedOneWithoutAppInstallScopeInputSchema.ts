import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateWithoutAppInstallScopeInputSchema } from './AppInstallCreateWithoutAppInstallScopeInputSchema';
import { AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema } from './AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema';
import { AppInstallCreateOrConnectWithoutAppInstallScopeInputSchema } from './AppInstallCreateOrConnectWithoutAppInstallScopeInputSchema';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';

export const AppInstallCreateNestedOneWithoutAppInstallScopeInputSchema: z.ZodType<Prisma.AppInstallCreateNestedOneWithoutAppInstallScopeInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallCreateWithoutAppInstallScopeInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppInstallCreateOrConnectWithoutAppInstallScopeInputSchema).optional(),
  connect: z.lazy(() => AppInstallWhereUniqueInputSchema).optional()
}).strict();

export default AppInstallCreateNestedOneWithoutAppInstallScopeInputSchema;
