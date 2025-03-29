import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateAddOnCreateManyInputSchema } from '../inputTypeSchemas/RateAddOnCreateManyInputSchema'

export const RateAddOnCreateManyArgsSchema: z.ZodType<Prisma.RateAddOnCreateManyArgs> = z.object({
  data: z.union([ RateAddOnCreateManyInputSchema,RateAddOnCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RateAddOnCreateManyArgsSchema;
