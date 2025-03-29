import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppScopeCreateManyInputSchema } from '../inputTypeSchemas/AppScopeCreateManyInputSchema'

export const AppScopeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AppScopeCreateManyAndReturnArgs> = z.object({
  data: z.union([ AppScopeCreateManyInputSchema,AppScopeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AppScopeCreateManyAndReturnArgsSchema;
