import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallScopeCreateNestedManyWithoutScopeInputSchema } from './AppInstallScopeCreateNestedManyWithoutScopeInputSchema';

export const AppScopeCreateInputSchema: z.ZodType<Prisma.AppScopeCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  AppInstallScope: z.lazy(() => AppInstallScopeCreateNestedManyWithoutScopeInputSchema).optional()
}).strict();

export default AppScopeCreateInputSchema;
