import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageLogCreateManyInputSchema } from '../inputTypeSchemas/ApiUsageLogCreateManyInputSchema'

export const ApiUsageLogCreateManyArgsSchema: z.ZodType<Prisma.ApiUsageLogCreateManyArgs> = z.object({
  data: z.union([ ApiUsageLogCreateManyInputSchema,ApiUsageLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ApiUsageLogCreateManyArgsSchema;
