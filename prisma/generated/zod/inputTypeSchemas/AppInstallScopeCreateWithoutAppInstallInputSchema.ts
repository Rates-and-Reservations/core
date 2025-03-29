import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppScopeCreateNestedOneWithoutAppInstallScopeInputSchema } from './AppScopeCreateNestedOneWithoutAppInstallScopeInputSchema';

export const AppInstallScopeCreateWithoutAppInstallInputSchema: z.ZodType<Prisma.AppInstallScopeCreateWithoutAppInstallInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  scope: z.lazy(() => AppScopeCreateNestedOneWithoutAppInstallScopeInputSchema)
}).strict();

export default AppInstallScopeCreateWithoutAppInstallInputSchema;
