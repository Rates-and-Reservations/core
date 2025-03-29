import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallCountOutputTypeSelectSchema } from './AppInstallCountOutputTypeSelectSchema';

export const AppInstallCountOutputTypeArgsSchema: z.ZodType<Prisma.AppInstallCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AppInstallCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AppInstallCountOutputTypeSelectSchema;
