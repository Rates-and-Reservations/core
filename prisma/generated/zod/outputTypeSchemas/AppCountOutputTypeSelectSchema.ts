import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AppCountOutputTypeSelectSchema: z.ZodType<Prisma.AppCountOutputTypeSelect> = z.object({
  AppInstall: z.boolean().optional(),
  OAuthToken: z.boolean().optional(),
}).strict();

export default AppCountOutputTypeSelectSchema;
