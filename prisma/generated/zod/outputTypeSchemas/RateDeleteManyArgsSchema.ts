import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateWhereInputSchema } from '../inputTypeSchemas/RateWhereInputSchema'

export const RateDeleteManyArgsSchema: z.ZodType<Prisma.RateDeleteManyArgs> = z.object({
  where: RateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default RateDeleteManyArgsSchema;
