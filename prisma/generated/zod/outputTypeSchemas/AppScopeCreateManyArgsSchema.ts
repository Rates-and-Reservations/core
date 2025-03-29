import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeCreateManyInputSchema } from '../inputTypeSchemas/AppScopeCreateManyInputSchema'

export const AppScopeCreateManyArgsSchema: z.ZodType<Prisma.AppScopeCreateManyArgs> = z.object({
  data: z.union([ AppScopeCreateManyInputSchema,AppScopeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AppScopeCreateManyArgsSchema;
