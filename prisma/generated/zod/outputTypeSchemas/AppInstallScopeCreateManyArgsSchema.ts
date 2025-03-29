import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeCreateManyInputSchema } from '../inputTypeSchemas/AppInstallScopeCreateManyInputSchema'

export const AppInstallScopeCreateManyArgsSchema: z.ZodType<Prisma.AppInstallScopeCreateManyArgs> = z.object({
  data: z.union([ AppInstallScopeCreateManyInputSchema,AppInstallScopeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AppInstallScopeCreateManyArgsSchema;
