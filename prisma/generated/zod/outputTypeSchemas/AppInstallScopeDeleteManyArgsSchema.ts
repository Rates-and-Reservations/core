import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeWhereInputSchema } from '../inputTypeSchemas/AppInstallScopeWhereInputSchema'

export const AppInstallScopeDeleteManyArgsSchema: z.ZodType<Prisma.AppInstallScopeDeleteManyArgs> = z.object({
  where: AppInstallScopeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AppInstallScopeDeleteManyArgsSchema;
