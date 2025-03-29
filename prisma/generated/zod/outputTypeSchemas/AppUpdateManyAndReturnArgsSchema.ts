import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppUpdateManyMutationInputSchema } from '../inputTypeSchemas/AppUpdateManyMutationInputSchema'
import { AppUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AppUncheckedUpdateManyInputSchema'
import { AppWhereInputSchema } from '../inputTypeSchemas/AppWhereInputSchema'

export const AppUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AppUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AppUpdateManyMutationInputSchema,AppUncheckedUpdateManyInputSchema ]),
  where: AppWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AppUpdateManyAndReturnArgsSchema;
