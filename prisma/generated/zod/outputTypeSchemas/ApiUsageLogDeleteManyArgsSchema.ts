import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApiUsageLogWhereInputSchema } from '../inputTypeSchemas/ApiUsageLogWhereInputSchema'

export const ApiUsageLogDeleteManyArgsSchema: z.ZodType<Prisma.ApiUsageLogDeleteManyArgs> = z.object({
  where: ApiUsageLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ApiUsageLogDeleteManyArgsSchema;
