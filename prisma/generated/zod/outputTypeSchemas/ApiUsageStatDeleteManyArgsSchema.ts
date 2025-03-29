import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageStatWhereInputSchema } from '../inputTypeSchemas/ApiUsageStatWhereInputSchema'

export const ApiUsageStatDeleteManyArgsSchema: z.ZodType<Prisma.ApiUsageStatDeleteManyArgs> = z.object({
  where: ApiUsageStatWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ApiUsageStatDeleteManyArgsSchema;
