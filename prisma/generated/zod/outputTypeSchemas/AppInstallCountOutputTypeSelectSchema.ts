import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AppInstallCountOutputTypeSelectSchema: z.ZodType<Prisma.AppInstallCountOutputTypeSelect> = z.object({
  AppInstallScope: z.boolean().optional(),
}).strict();

export default AppInstallCountOutputTypeSelectSchema;
