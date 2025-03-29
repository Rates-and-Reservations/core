import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeWhereInputSchema } from '../inputTypeSchemas/AppScopeWhereInputSchema'

export const AppScopeDeleteManyArgsSchema: z.ZodType<Prisma.AppScopeDeleteManyArgs> = z.object({
  where: AppScopeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AppScopeDeleteManyArgsSchema;
