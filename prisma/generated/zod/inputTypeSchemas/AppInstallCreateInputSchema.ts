import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallStatusSchema } from './AppInstallStatusSchema';
import { MerchantCreateNestedOneWithoutAppInstallInputSchema } from './MerchantCreateNestedOneWithoutAppInstallInputSchema';
import { AppCreateNestedOneWithoutAppInstallInputSchema } from './AppCreateNestedOneWithoutAppInstallInputSchema';
import { AppInstallScopeCreateNestedManyWithoutAppInstallInputSchema } from './AppInstallScopeCreateNestedManyWithoutAppInstallInputSchema';

export const AppInstallCreateInputSchema: z.ZodType<Prisma.AppInstallCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => AppInstallStatusSchema).optional(),
  installedAt: z.coerce.date().optional().nullable(),
  uninstalledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutAppInstallInputSchema),
  app: z.lazy(() => AppCreateNestedOneWithoutAppInstallInputSchema),
  AppInstallScope: z.lazy(() => AppInstallScopeCreateNestedManyWithoutAppInstallInputSchema).optional()
}).strict();

export default AppInstallCreateInputSchema;
