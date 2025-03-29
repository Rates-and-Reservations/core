import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { AppCreateNestedOneWithoutAppInstallInputSchema } from './AppCreateNestedOneWithoutAppInstallInputSchema';
import { AppInstallScopeCreateNestedManyWithoutAppInstallInputSchema } from './AppInstallScopeCreateNestedManyWithoutAppInstallInputSchema';

export const AppInstallCreateWithoutMerchantInputSchema: z.ZodType<Prisma.AppInstallCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => AppInstallStatusSchema).optional(),
  installedAt: z.coerce.date().optional().nullable(),
  uninstalledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  app: z.lazy(() => AppCreateNestedOneWithoutAppInstallInputSchema),
  AppInstallScope: z.lazy(() => AppInstallScopeCreateNestedManyWithoutAppInstallInputSchema).optional()
}).strict();

export default AppInstallCreateWithoutMerchantInputSchema;
