import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageStatCreateManyInputSchema } from '../inputTypeSchemas/ApiUsageStatCreateManyInputSchema'

export const ApiUsageStatCreateManyArgsSchema: z.ZodType<Prisma.ApiUsageStatCreateManyArgs> = z.object({
  data: z.union([ ApiUsageStatCreateManyInputSchema,ApiUsageStatCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ApiUsageStatCreateManyArgsSchema;
