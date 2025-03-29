import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountUpdateManyMutationInputSchema } from '../inputTypeSchemas/DiscountUpdateManyMutationInputSchema'
import { DiscountUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DiscountUncheckedUpdateManyInputSchema'
import { DiscountWhereInputSchema } from '../inputTypeSchemas/DiscountWhereInputSchema'

export const DiscountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.DiscountUpdateManyAndReturnArgs> = z.object({
  data: z.union([ DiscountUpdateManyMutationInputSchema,DiscountUncheckedUpdateManyInputSchema ]),
  where: DiscountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default DiscountUpdateManyAndReturnArgsSchema;
