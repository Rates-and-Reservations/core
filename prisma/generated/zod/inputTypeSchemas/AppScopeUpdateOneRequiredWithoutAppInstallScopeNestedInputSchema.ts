import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppScopeCreateWithoutAppInstallScopeInputSchema } from './AppScopeCreateWithoutAppInstallScopeInputSchema';
import { AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema } from './AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema';
import { AppScopeCreateOrConnectWithoutAppInstallScopeInputSchema } from './AppScopeCreateOrConnectWithoutAppInstallScopeInputSchema';
import { AppScopeUpsertWithoutAppInstallScopeInputSchema } from './AppScopeUpsertWithoutAppInstallScopeInputSchema';
import { AppScopeWhereUniqueInputSchema } from './AppScopeWhereUniqueInputSchema';
import { AppScopeUpdateToOneWithWhereWithoutAppInstallScopeInputSchema } from './AppScopeUpdateToOneWithWhereWithoutAppInstallScopeInputSchema';
import { AppScopeUpdateWithoutAppInstallScopeInputSchema } from './AppScopeUpdateWithoutAppInstallScopeInputSchema';
import { AppScopeUncheckedUpdateWithoutAppInstallScopeInputSchema } from './AppScopeUncheckedUpdateWithoutAppInstallScopeInputSchema';

export const AppScopeUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema: z.ZodType<Prisma.AppScopeUpdateOneRequiredWithoutAppInstallScopeNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppScopeCreateWithoutAppInstallScopeInputSchema),z.lazy(() => AppScopeUncheckedCreateWithoutAppInstallScopeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppScopeCreateOrConnectWithoutAppInstallScopeInputSchema).optional(),
  upsert: z.lazy(() => AppScopeUpsertWithoutAppInstallScopeInputSchema).optional(),
  connect: z.lazy(() => AppScopeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AppScopeUpdateToOneWithWhereWithoutAppInstallScopeInputSchema),z.lazy(() => AppScopeUpdateWithoutAppInstallScopeInputSchema),z.lazy(() => AppScopeUncheckedUpdateWithoutAppInstallScopeInputSchema) ]).optional(),
}).strict();

export default AppScopeUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema;
