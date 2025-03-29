import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AppScopeCountOutputTypeSelectSchema: z.ZodType<Prisma.AppScopeCountOutputTypeSelect> = z.object({
  AppInstallScope: z.boolean().optional(),
}).strict();

export default AppScopeCountOutputTypeSelectSchema;
