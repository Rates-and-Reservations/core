import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageStatUpdateManyMutationInputSchema } from '../inputTypeSchemas/ApiUsageStatUpdateManyMutationInputSchema'
import { ApiUsageStatUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ApiUsageStatUncheckedUpdateManyInputSchema'
import { ApiUsageStatWhereInputSchema } from '../inputTypeSchemas/ApiUsageStatWhereInputSchema'

export const ApiUsageStatUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ApiUsageStatUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ApiUsageStatUpdateManyMutationInputSchema,ApiUsageStatUncheckedUpdateManyInputSchema ]),
  where: ApiUsageStatWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ApiUsageStatUpdateManyAndReturnArgsSchema;
