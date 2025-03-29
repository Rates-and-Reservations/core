import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageLogCreateManyInputSchema } from '../inputTypeSchemas/ApiUsageLogCreateManyInputSchema'

export const ApiUsageLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ApiUsageLogCreateManyAndReturnArgs> = z.object({
  data: z.union([ ApiUsageLogCreateManyInputSchema,ApiUsageLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ApiUsageLogCreateManyAndReturnArgsSchema;
