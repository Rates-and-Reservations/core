import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallSelectSchema } from '../inputTypeSchemas/AppInstallSelectSchema';
import { AppInstallIncludeSchema } from '../inputTypeSchemas/AppInstallIncludeSchema';

export const AppInstallArgsSchema: z.ZodType<Prisma.AppInstallDefaultArgs> = z.object({
  select: z.lazy(() => AppInstallSelectSchema).optional(),
  include: z.lazy(() => AppInstallIncludeSchema).optional(),
}).strict();

export default AppInstallArgsSchema;
