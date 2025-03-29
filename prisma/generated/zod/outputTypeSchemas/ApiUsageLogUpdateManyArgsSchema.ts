import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/ApiUsageLogUpdateManyMutationInputSchema'
import { ApiUsageLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ApiUsageLogUncheckedUpdateManyInputSchema'
import { ApiUsageLogWhereInputSchema } from '../inputTypeSchemas/ApiUsageLogWhereInputSchema'

export const ApiUsageLogUpdateManyArgsSchema: z.ZodType<Prisma.ApiUsageLogUpdateManyArgs> = z.object({
  data: z.union([ ApiUsageLogUpdateManyMutationInputSchema,ApiUsageLogUncheckedUpdateManyInputSchema ]),
  where: ApiUsageLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ApiUsageLogUpdateManyArgsSchema;
