import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { AppInstallScopeUncheckedCreateNestedManyWithoutAppInstallInputSchema } from './AppInstallScopeUncheckedCreateNestedManyWithoutAppInstallInputSchema';

export const AppInstallUncheckedCreateWithoutMerchantInputSchema: z.ZodType<Prisma.AppInstallUncheckedCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  appId: z.string(),
  status: z.lazy(() => AppInstallStatusSchema).optional(),
  installedAt: z.coerce.date().optional().nullable(),
  uninstalledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  AppInstallScope: z.lazy(() => AppInstallScopeUncheckedCreateNestedManyWithoutAppInstallInputSchema).optional()
}).strict();

export default AppInstallUncheckedCreateWithoutMerchantInputSchema;
