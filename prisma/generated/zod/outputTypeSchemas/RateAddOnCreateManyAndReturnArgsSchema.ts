import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateAddOnCreateManyInputSchema } from '../inputTypeSchemas/RateAddOnCreateManyInputSchema'

export const RateAddOnCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RateAddOnCreateManyAndReturnArgs> = z.object({
  data: z.union([ RateAddOnCreateManyInputSchema,RateAddOnCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RateAddOnCreateManyAndReturnArgsSchema;
