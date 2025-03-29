import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeUpdateManyMutationInputSchema } from '../inputTypeSchemas/AppScopeUpdateManyMutationInputSchema'
import { AppScopeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AppScopeUncheckedUpdateManyInputSchema'
import { AppScopeWhereInputSchema } from '../inputTypeSchemas/AppScopeWhereInputSchema'

export const AppScopeUpdateManyArgsSchema: z.ZodType<Prisma.AppScopeUpdateManyArgs> = z.object({
  data: z.union([ AppScopeUpdateManyMutationInputSchema,AppScopeUncheckedUpdateManyInputSchema ]),
  where: AppScopeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AppScopeUpdateManyArgsSchema;
