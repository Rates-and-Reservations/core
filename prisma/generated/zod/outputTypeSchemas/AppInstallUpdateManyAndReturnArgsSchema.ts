import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallUpdateManyMutationInputSchema } from '../inputTypeSchemas/AppInstallUpdateManyMutationInputSchema'
import { AppInstallUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AppInstallUncheckedUpdateManyInputSchema'
import { AppInstallWhereInputSchema } from '../inputTypeSchemas/AppInstallWhereInputSchema'

export const AppInstallUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AppInstallUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AppInstallUpdateManyMutationInputSchema,AppInstallUncheckedUpdateManyInputSchema ]),
  where: AppInstallWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AppInstallUpdateManyAndReturnArgsSchema;
