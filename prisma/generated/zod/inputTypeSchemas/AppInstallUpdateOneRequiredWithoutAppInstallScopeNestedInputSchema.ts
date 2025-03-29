import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateWithoutAppInstallScopeInputSchema } from './AppInstallCreateWithoutAppInstallScopeInputSchema';
import { AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema } from './AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema';
import { AppInstallCreateOrConnectWithoutAppInstallScopeInputSchema } from './AppInstallCreateOrConnectWithoutAppInstallScopeInputSchema';
import { AppInstallUpsertWithoutAppInstallScopeInputSchema } from './AppInstallUpsertWithoutAppInstallScopeInputSchema';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallUpdateToOneWithWhereWithoutAppInstallScopeInputSchema } from './AppInstallUpdateToOneWithWhereWithoutAppInstallScopeInputSchema';
import { AppInstallUpdateWithoutAppInstallScopeInputSchema } from './AppInstallUpdateWithoutAppInstallScopeInputSchema';
import { AppInstallUncheckedUpdateWithoutAppInstallScopeInputSchema } from './AppInstallUncheckedUpdateWithoutAppInstallScopeInputSchema';

export const AppInstallUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema: z.ZodType<Prisma.AppInstallUpdateOneRequiredWithoutAppInstallScopeNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallCreateWithoutAppInstallScopeInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutAppInstallScopeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppInstallCreateOrConnectWithoutAppInstallScopeInputSchema).optional(),
  upsert: z.lazy(() => AppInstallUpsertWithoutAppInstallScopeInputSchema).optional(),
  connect: z.lazy(() => AppInstallWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AppInstallUpdateToOneWithWhereWithoutAppInstallScopeInputSchema),z.lazy(() => AppInstallUpdateWithoutAppInstallScopeInputSchema),z.lazy(() => AppInstallUncheckedUpdateWithoutAppInstallScopeInputSchema) ]).optional(),
}).strict();

export default AppInstallUpdateOneRequiredWithoutAppInstallScopeNestedInputSchema;
