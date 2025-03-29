import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppCreateWithoutAppInstallInputSchema } from './AppCreateWithoutAppInstallInputSchema';
import { AppUncheckedCreateWithoutAppInstallInputSchema } from './AppUncheckedCreateWithoutAppInstallInputSchema';
import { AppCreateOrConnectWithoutAppInstallInputSchema } from './AppCreateOrConnectWithoutAppInstallInputSchema';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';

export const AppCreateNestedOneWithoutAppInstallInputSchema: z.ZodType<Prisma.AppCreateNestedOneWithoutAppInstallInput> = z.object({
  create: z.union([ z.lazy(() => AppCreateWithoutAppInstallInputSchema),z.lazy(() => AppUncheckedCreateWithoutAppInstallInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppCreateOrConnectWithoutAppInstallInputSchema).optional(),
  connect: z.lazy(() => AppWhereUniqueInputSchema).optional()
}).strict();

export default AppCreateNestedOneWithoutAppInstallInputSchema;
