import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppScopeCreateWithoutAppInstallScopeInputSchema } from './AppScopeCreateWithoutAppInstallScopeInputSchema';
import { AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema } from './AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema';
import { AppScopeCreateOrConnectWithoutAppInstallScopeInputSchema } from './AppScopeCreateOrConnectWithoutAppInstallScopeInputSchema';
import { AppScopeWhereUniqueInputSchema } from './AppScopeWhereUniqueInputSchema';

export const AppScopeCreateNestedOneWithoutAppInstallScopeInputSchema: z.ZodType<Prisma.AppScopeCreateNestedOneWithoutAppInstallScopeInput> = z.object({
  create: z.union([ z.lazy(() => AppScopeCreateWithoutAppInstallScopeInputSchema),z.lazy(() => AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppScopeCreateOrConnectWithoutAppInstallScopeInputSchema).optional(),
  connect: z.lazy(() => AppScopeWhereUniqueInputSchema).optional()
}).strict();

export default AppScopeCreateNestedOneWithoutAppInstallScopeInputSchema;
