import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundRequestWhereInputSchema } from '../inputTypeSchemas/RefundRequestWhereInputSchema'

export const RefundRequestDeleteManyArgsSchema: z.ZodType<Prisma.RefundRequestDeleteManyArgs> = z.object({
  where: RefundRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RefundRequestDeleteManyArgsSchema;
