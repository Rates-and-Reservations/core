import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallCreateManyInputSchema } from '../inputTypeSchemas/AppInstallCreateManyInputSchema'

export const AppInstallCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AppInstallCreateManyAndReturnArgs> = z.object({
  data: z.union([ AppInstallCreateManyInputSchema,AppInstallCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AppInstallCreateManyAndReturnArgsSchema;
