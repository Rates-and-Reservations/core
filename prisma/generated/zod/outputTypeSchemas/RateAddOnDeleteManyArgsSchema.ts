import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateAddOnWhereInputSchema } from '../inputTypeSchemas/RateAddOnWhereInputSchema'

export const RateAddOnDeleteManyArgsSchema: z.ZodType<Prisma.RateAddOnDeleteManyArgs> = z.object({
  where: RateAddOnWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RateAddOnDeleteManyArgsSchema;
