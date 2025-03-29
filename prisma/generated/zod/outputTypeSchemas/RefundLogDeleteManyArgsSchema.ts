import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RefundLogWhereInputSchema } from '../inputTypeSchemas/RefundLogWhereInputSchema'

export const RefundLogDeleteManyArgsSchema: z.ZodType<Prisma.RefundLogDeleteManyArgs> = z.object({
  where: RefundLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RefundLogDeleteManyArgsSchema;
