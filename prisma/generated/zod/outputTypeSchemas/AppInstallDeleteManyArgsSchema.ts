import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallWhereInputSchema } from '../inputTypeSchemas/AppInstallWhereInputSchema'

export const AppInstallDeleteManyArgsSchema: z.ZodType<Prisma.AppInstallDeleteManyArgs> = z.object({
  where: AppInstallWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AppInstallDeleteManyArgsSchema;
