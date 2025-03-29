import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallScopeUpdateManyMutationInputSchema } from '../inputTypeSchemas/AppInstallScopeUpdateManyMutationInputSchema'
import { AppInstallScopeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AppInstallScopeUncheckedUpdateManyInputSchema'
import { AppInstallScopeWhereInputSchema } from '../inputTypeSchemas/AppInstallScopeWhereInputSchema'

export const AppInstallScopeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AppInstallScopeUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AppInstallScopeUpdateManyMutationInputSchema,AppInstallScopeUncheckedUpdateManyInputSchema ]),
  where: AppInstallScopeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AppInstallScopeUpdateManyAndReturnArgsSchema;
