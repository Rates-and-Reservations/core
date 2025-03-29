import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountCreateManyInputSchema } from '../inputTypeSchemas/DiscountCreateManyInputSchema'

export const DiscountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DiscountCreateManyAndReturnArgs> = z.object({
  data: z.union([ DiscountCreateManyInputSchema,DiscountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DiscountCreateManyAndReturnArgsSchema;
