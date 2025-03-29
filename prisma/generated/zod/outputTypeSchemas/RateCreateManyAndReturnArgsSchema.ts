import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateCreateManyInputSchema } from '../inputTypeSchemas/RateCreateManyInputSchema'

export const RateCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RateCreateManyAndReturnArgs> = z.object({
  data: z.union([ RateCreateManyInputSchema,RateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RateCreateManyAndReturnArgsSchema;
