import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountWhereInputSchema } from '../inputTypeSchemas/DiscountWhereInputSchema'

export const DiscountDeleteManyArgsSchema: z.ZodType<Prisma.DiscountDeleteManyArgs> = z.object({
  where: DiscountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default DiscountDeleteManyArgsSchema;
